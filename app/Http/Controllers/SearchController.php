<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Discussion;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function searchBar(Request $request)
    {

        $keyword = $request->keyword;
        $discussion = Discussion::with(['category', 'user'])
            ->where(function ($query) use ($keyword) {
                $query->where('title', 'LIKE', '%' . $keyword . '%');
            })
            ->where('status', 'Published')
            ->orderBy('id', 'asc')
            ->paginate(5);

        $article = Article::with(['category', 'user'])
            ->where(function ($query) use ($keyword) {
                $query->where('title', 'LIKE', '%' . $keyword . '%');
            })
            ->orderBy('id', 'asc')
            ->paginate(5);

        return view('tampil', compact('discussion', 'article', 'keyword'));
    }
}
