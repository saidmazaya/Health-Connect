<?php

use App\Models\User;
use App\Models\Category;
use App\Models\Discussion;
use App\Models\ParentType;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserAdminController;
use App\Http\Controllers\ArticleAdminController;
use App\Http\Controllers\CategoryAdminController;
use App\Http\Controllers\ResponseAdminController;
use App\Http\Controllers\ReportResponseController;
use App\Http\Controllers\DiscussionAdminController;
use App\Http\Controllers\DiscussionController;
use App\Http\Controllers\DoctorAdminController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ReportDiscussionController;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SpecialistAdminController;
use App\Http\Controllers\VoteDiscussionController;
use App\Http\Controllers\VoteResponseController;
use App\Models\ReportDiscussion;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Authentitacation Start
Route::get('/login', [AuthController::class, 'signin'])->name('login')->middleware('guest');
Route::post('/register', [AuthController::class, 'signup'])->name('register');
Route::post('/login', [AuthController::class, 'authentication'])->middleware('guest');
Route::get('/signout', [AuthController::class, 'signout'])->middleware('auth');

Route::get('/register', function () {
    return view('auth.register');
})->middleware('guest');

// Forgot Password
Route::get('/forgot-password', function () {
    return view('auth.forgot-password');
})->middleware('guest')->name('password.request');

Route::post('/forgot-password', function (Request $request) {
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink(
        $request->only('email')
    );

    return $status === Password::RESET_LINK_SENT
        ? back()->with(['status' => __($status)])
        : back()->withErrors(['email' => __($status)]);
})->middleware('guest')->name('password.email');

Route::get('/reset-password/{token}', function (string $token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');

Route::post('/reset-password', function (Request $request) {
    $request->validate([
        'token' => 'required',
        'email' => 'required|email',
        'password' => 'required|min:8|confirmed|max:16',
    ]);

    $status = Password::reset(
        $request->only('email', 'password', 'password_confirmation', 'token'),
        function (User $user, string $password) {
            $user->forceFill([
                'password' => Hash::make($password)
            ])->setRememberToken(Str::random(60));

            $user->save();

            event(new PasswordReset($user));
        }
    );

    return $status === Password::PASSWORD_RESET
        ? redirect()->route('login')->with('status', __($status))
        : back()->withErrors(['email' => [__($status)]]);
})->middleware('guest')->name('password.update');
// End Forgot Password

// Authentication End

// User Route Start
Route::get('/', function () {
    $discussion = Discussion::where('status', 'Published')
        ->orderBy('created_at', 'desc')
        ->get();

    return view('index', compact('discussion'));
})->name('home');

Route::get('/about', function () {
    return view('about');
});

Route::get('/forum', function () {
    $parent = ParentType::paginate(10);
    $category = Category::all();

    return view('forum', compact('parent', 'category'));
});

Route::resource('/kategori', CategoryController::class);
Route::get('/kategori/{slug}', [CategoryController::class, 'show'])->name('kategori.detail');

Route::resource('/diskusi', DiscussionController::class);

Route::get('/vote-up/{id}', [VoteDiscussionController::class, 'voteUp'])->name('vote.up')->middleware('auth');
Route::get('/vote-down/{id}', [VoteDiscussionController::class, 'voteDown'])->name('vote.down')->middleware('auth');

Route::get('/vote-response-up/{id}', [VoteResponseController::class, 'voteUp'])->name('vote-response.up')->middleware('auth');
Route::get('/vote-response-down/{id}', [VoteResponseController::class, 'voteDown'])->name('vote-response.down')->middleware('auth');

Route::resource('/response', ResponseController::class)->only(['store', 'destroy']);

Route::get('/search', [SearchController::class, 'searchBar'])->name('search');

Route::post('/report-discussion', [ReportController::class, 'ReportDiscussion'])->name('report.discussion');
Route::post('/report-response', [ReportController::class, 'ReportResponse'])->name('report.response');


Route::get('/informasi', function () {
    return view('informasi');
});

Route::get('/dokter', function () {
    return view('dokter');
});

Route::get('/informasi/{id}', function () {
    return view('detail-info');
});

Route::get('/profil/{username}', function () {
    return view('profil');
});

Route::get('/tampil/{id}', function () {
    return view('tampil');
});

Route::get('/profil/{username}', function () {
    return view('profil');
});
// User Route End


// Admin Route Start
Route::get('/dashboard', function () {
    return view('admin.index');
})->name('dashboard_admin')->middleware(['auth', 'must-admin']);

Route::prefix('admin')->middleware('auth', 'must-admin')->group(function () {

    Route::get('/discussion', [DiscussionAdminController::class, 'index'])->name('admin.discussion');

    Route::get('/response', [ResponseAdminController::class, 'index'])->name('admin.response');

    // Report Discussion
    Route::resource('/report-discussion', ReportDiscussionController::class)->names([
        'index' => 'report-discussion.index',
        'create' => 'report-discussion.create',
        'store' => 'report-discussion.store',
        'show' => 'report-discussion.detail',
        'edit' => 'report-discussion.edit',
        'update' => 'report-discussion.update',
        'destroy' => 'report-discussion.delete',
    ]);
    Route::put('/report-discussion-accept/{id}', [ReportDiscussionController::class, 'acceptReport'])->name('accept.report');
    Route::put('/report-discussion-reject/{id}', [ReportDiscussionController::class, 'rejectReport'])->name('reject.report');

    // Report Response
    Route::resource('/report-response', ReportResponseController::class)->names([
        'index' => 'report-response.index',
        'create' => 'report-response.create',
        'store' => 'report-response.store',
        'show' => 'report-response.detail',
        'edit' => 'report-response.edit',
        'update' => 'report-response.update',
        'destroy' => 'report-response.delete',
    ]);
    Route::put('/report-response-accept/{id}', [ReportResponseController::class, 'acceptReport'])->name('response-accept.report');
    Route::put('/report-response-reject/{id}', [ReportResponseController::class, 'rejectReport'])->name('response-reject.report');

    Route::resource('/articles', ArticleAdminController::class)->except('show');

    Route::resource('/category', CategoryAdminController::class)->except('show');

    Route::resource('/user', UserAdminController::class)->only('index');
    Route::get('/user-track/{username}', [UserAdminController::class, 'userTrack'])->name('user.track');
    Route::put('/user-upgrade/{id}', [UserAdminController::class, 'userUpgrade'])->name('user.accept-doctor');

    Route::resource('/doctor', DoctorAdminController::class)->only('index');
    Route::get('/doctor-track/{username}', [DoctorAdminController::class, 'userTrack'])->name('doctor.track');
    Route::put('/doctor-demote/{id}', [DoctorAdminController::class, 'doctorDemote'])->name('doctor.demote');

    Route::resource('/specialist', SpecialistAdminController::class)->except('show');
});
// Admin Route End