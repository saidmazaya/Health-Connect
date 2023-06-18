<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\ParentType;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryCreateRequest;
use App\Http\Requests\CategoryUpdateRequest;

class CategoryAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $category = Category::with(['articles', 'parent'])
            ->where(function ($query) use ($keyword) {
                $query->where('name', 'LIKE', '%' . $keyword . '%');
            })
            ->orderBy('name')
            ->paginate(10);
        return view('admin.category.category', compact('category', 'keyword'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $type = ParentType::select('id', 'name')->get();

        return view('admin.category.category-add', compact('type'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryCreateRequest $request)
    {
        $request['slug'] = Str::slug($request->name, '-');
        $category = Category::create($request->all());

        return redirect(route('category.index'))->with('message', 'Penambahan Data Perhasil');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($slug)
    {
        $category = Category::with('parent')
            ->where('slug', $slug)->first();

        $type = ParentType::where('id', '!=', $category->type_id)->select('id', 'name')->get();

        return view('admin.category.category-edit', compact('category', 'type'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryUpdateRequest $request, $id)
    {
        $category = Category::findOrFail($id);

        if ($request->name !== $category->name) {
            // Jika nama diubah, perbarui juga slug
            $request['slug'] = Str::slug($request->name, '-');
        }

        $category->update($request->all());

        return redirect(route('category.index'))->with('message', 'Perubahan Data Category Berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        Article::where('category_id', $category->id)->update(['category_id' => null]);

        $category->delete();

        return redirect(route('category.index'))->with('message', 'Tag berhasil dihapus.');
    }
}
