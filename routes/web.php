<?php

use App\Models\Category;
use App\Models\Discussion;
use App\Models\ParentType;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ResponseAdminController;
use App\Http\Controllers\ReportResponseController;
use App\Http\Controllers\DiscussionAdminController;
use App\Http\Controllers\ReportDiscussionController;

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

// User Route Start
Route::get('/', function () {
    $discussion = Discussion::where('status', 'Published')
        ->get();

    return view('index', compact('discussion'));
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/forum', function () {
    $parent = ParentType::paginate(10);
    $category = Category::all();

    return view('forum', compact('parent', 'category'));
});

Route::resource('/kategori', CategoryController::class);

Route::get('/login', function () {
    return view('auth.login');
});

Route::get('/register', function () {
    return view('auth.register');
});

Route::get('/informasi', function () {
    return view('informasi');
});

Route::get('/dokter', function () {
    return view('dokter');
});

Route::get('/informasi/{id}', function () {
    return view('detail-info');
});
// User Route End


// Admin Route Start
Route::get('/dashboard', function () {
    return view('admin.index');
})->name('dashboard_admin');

Route::prefix('admin')->group(function () {

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
});
// Admin Route End