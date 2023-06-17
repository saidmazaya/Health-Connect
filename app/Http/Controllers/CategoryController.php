<?php

namespace App\Http\Controllers;

use App\Models\Category;
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
            $selectedCategories = $selectedCategories->filter(function ($category) use ($search) {
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
    
}
