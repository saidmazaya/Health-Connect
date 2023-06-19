<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\ArticleAdminRequest;

class ArticleAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $article = Article::with(['category', 'user'])
            ->where(function ($query) use ($keyword) {
                $query->where('title', 'LIKE', '%' . $keyword . '%')
                    ->orWhereHas('user', function ($query) use ($keyword) {
                        $query->where('name', 'LIKE', '%' . $keyword . '%');
                    })
                    ->orWhereHas('category', function ($query) use ($keyword) {
                        $query->where('name', 'LIKE', '%' . $keyword . '%');
                    });
            })
            ->whereHas('user', function ($query) {
                $query->where('role_id', 1);
            })
            ->orderBy('id', 'asc')
            ->paginate(10);
        return view('admin.article.article', compact('article', 'keyword'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $category = Category::select('id', 'name')
            ->orderBy('name')
            ->get();

        return view('admin.article.article-add', compact('category'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ArticleAdminRequest $request)
    {
        $newName = NULL;

        if ($request->file('photo')) {
            $extension = $request->file('photo')->getClientOriginalExtension();
            $today = now()->format('dmY_His');
            $newName = 'Admin' . '-' . $today . '-' . now()->timestamp . '-' . Str::random(10) . '.' . $extension;
            $request->file('photo')->storeAs('photo', $newName);
        }

        $request['image'] = $newName;
        $user = User::findOrFail($request->author_id);
        $request['slug'] = $user->username . '_' . Str::slug($request->title, '-') . '-' . rand(1000000, 9999999);
        $article = Article::create($request->all());

        return redirect(route('articles.index'))->with('message', 'Artikel Berhasil Ditambahkan');
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
        $article = Article::with(['user', 'category'])
            ->where('slug', $slug)->first();
        $category = Category::where('id', '!=', $article->category_id)->select('id', 'name')->orderBy('name')->get();
        return view('admin.article.article-edit', compact('article', 'category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ArticleAdminRequest $request, $id)
    {
        $article = Article::findOrFail($id);

        if ($request->file('photo')) {
            $oldPhotoPath = $article->image; // Path foto lama yang disimpan dalam database

            if ($oldPhotoPath != '') {
                // Hapus foto lama dari sistem file menggunakan Storage::delete()
                Storage::disk('public')->delete('photo/' . $oldPhotoPath);
            }

            // Simpan Foto Baru
            $extension = $request->file('photo')->getClientOriginalExtension();
            $today = now()->format('dmY_His');
            $newName = 'Admin' . '-' . $today . '-' . now()->timestamp . '-' . Str::random(10) . '.' . $extension;
            $request->file('photo')->storeAs('photo', $newName);

            $request['image'] = $newName;
        }

        if ($request->title !== $article->title) {
            // Jika nama diubah, perbarui juga slug
            $user = User::findOrFail($request->author_id);
            $request['slug'] = $user->username . '_' . Str::slug($request->title, '-') . '-' . rand(1000000, 9999999);
        }

        $article->update($request->all());

        return redirect(route('articles.index'))->with('message', 'Perubahan Data Artikel Berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $article = Article::findOrFail($id);

        $article->delete();

        return redirect(route('articles.index'))->with('message', 'Article berhasil dihapus.');
    }
}
