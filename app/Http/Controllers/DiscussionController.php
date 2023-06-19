<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Vote;
use App\Models\Article;
use App\Models\Category;
use App\Models\Response;
use App\Models\Discussion;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\DiscussionCreateRequest;

class DiscussionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $sortBy = $request->input('sort_by', 'latest');

        $query = Discussion::with(['category', 'user'])
            ->where('status', 'Published');

        if ($sortBy === 'votes') {
            $query->leftJoin('votes', 'discussions.id', '=', 'votes.discussion_id')
                ->select('discussions.id', 'discussions.title', 'discussions.content', 'discussions.slug', 'discussions.created_at', 'discussions.updated_at', 'discussions.category_id', 'discussions.author_id', DB::raw('COUNT(votes.id) AS vote_count'))
                ->groupBy('discussions.id', 'discussions.title', 'discussions.content', 'discussions.slug', 'discussions.created_at', 'discussions.updated_at', 'discussions.category_id', 'discussions.author_id')
                ->orderBy('vote_count', 'desc');
        } else {
            $query->orderBy('created_at', 'desc');
        }

        $discussion = $query->paginate(10);

        return view('diskusi', compact('discussion', 'sortBy'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $category = Category::select('id', 'name')
            ->orderBy('name')
            ->get();

        return view('create', compact('category'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DiscussionCreateRequest $request)
    {
        $user = User::findOrFail($request->author_id);
        $request['slug'] = $user->username . '_' . Str::slug($request->title, '-') . '-' . rand(1000000, 9999999);
        $discussion = Discussion::create($request->all());

        return redirect(route('home'))->with('message', 'Diskusi Berhasil Dibuat');
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $discussion = Discussion::with(['user', 'category', 'comments.replies'])
            ->where('slug', $slug)
            ->first();

        if ($discussion) {
            $publishedResponses = Response::with('discussion', 'user')
                ->where('status', '!=', 'Deleted')
                ->where('discussion_id', $discussion->id)
                ->get();
            // dd($discussion->toArray());
            // dd($publishedResponses->toArray());

            $voteUp = Vote::where('discussion_id', $discussion->id)
                ->where('type', 'Upvote')
                ->count();

            $voteDown = Vote::where('discussion_id', $discussion->id)
                ->where('type', 'Downvote')
                ->count();

            return view('detail-diskusi', compact('discussion', 'publishedResponses', 'voteUp', 'voteDown'));
        } else {
            abort(404);
        }
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
