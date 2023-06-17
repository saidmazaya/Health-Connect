<?php

namespace App\Http\Controllers;

use App\Models\Discussion;
use Illuminate\Http\Request;

class DiscussionAdminController extends Controller
{
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $discussion = Discussion::with(['category', 'user'])
            ->where(function ($query) use ($keyword) {
                $query->where('title', 'LIKE', '%' . $keyword . '%')
                    ->orWhereHas('user', function ($query) use ($keyword) {
                        $query->where('name', 'LIKE', '%' . $keyword . '%');
                    })
                    ->orWhereHas('category', function ($query) use ($keyword) {
                        $query->where('name', 'LIKE', '%' . $keyword . '%');
                    });
            })
            // ->whereHas('user', function ($query) {
            //     $query->where('role_id', '!=', 1);
            // })
            ->where('status', 'Published')
            ->orderBy('id', 'asc')
            ->paginate(10);
        return view('admin.discussion', compact('discussion', 'keyword'));
    }
}
