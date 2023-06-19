<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\Discussion;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::orderBy('name')->get();

        $perPage = 15; // Jumlah kategori per halaman

        // Mengelompokkan kategori-kategori berdasarkan huruf pertama
        $groupedCategories = $categories->groupBy(function ($category) {
            return strtoupper(substr($category->name, 0, 1));
        });

        $currentPage = Paginator::resolveCurrentPage();

        // Mengambil huruf yang saat ini dipilih pada paginasi atas
        $currentLetter = request()->input('letter', 'A');

        // Mendapatkan data kategori yang sesuai dengan huruf yang dipilih
        $selectedCategories = $groupedCategories->get($currentLetter, []);

        // Mengambil huruf-huruf yang ada dalam grup kategori
        $letters = $groupedCategories->keys()->toArray();

        // Filter kategori berdasarkan pencarian
        $search = request()->input('search');
        if ($search) {
            $selectedCategories = $categories->filter(function ($category) use ($search) {
                return stripos($category->name, $search) !== false;
            });
        }

        // Menginisialisasi Paginator untuk kategori terpilih
        $paginator = new LengthAwarePaginator(
            $selectedCategories->forPage($currentPage, $perPage),
            $selectedCategories->count(),
            $perPage,
            $currentPage,
            ['path' => Paginator::resolveCurrentPath(), 'query' => request()->query()]
        );

        return view('kategori', compact('paginator', 'letters', 'currentLetter'));
    }

    public function show($slug)
    {

        $category = Category::where('slug', $slug)->first();

        $discussion = Discussion::with(['category', 'user'])
            ->where('status', 'Published')
            ->whereHas('category', function ($query) use ($category) {
                $query->where('slug', $category->slug);
            })
            ->orderBy('id', 'asc')
            ->paginate(5);

        $article = Article::with(['category', 'user'])
            ->orderBy('id', 'asc')
            ->whereHas('category', function ($query) use ($category) {
                $query->where('slug', $category->slug);
            })
            ->paginate(5);

        return view('detail-category', compact('discussion', 'article'));
    }
}
