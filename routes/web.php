<?php

use App\Http\Controllers\CategoryController;
use App\Models\Category;
use App\Models\Discussion;
use App\Models\ParentType;
use Illuminate\Support\Facades\Route;

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
