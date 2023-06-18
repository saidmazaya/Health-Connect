<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VoteDiscussionController extends Controller
{
    public function voteUp($discussion_id)
    {
        $voteUp = Vote::where('discussion_id', $discussion_id)
            ->where('user_id', Auth::user()->id)
            ->where('type', 'Upvote')
            ->first();

        $voteDown = Vote::where('discussion_id', $discussion_id)
            ->where('user_id', Auth::user()->id)
            ->where('type', 'Downvote')
            ->first();

        if ($voteUp) {
            $voteUp->delete();
        } else {
            if ($voteDown) {
                $voteDown->delete();
            }

            Vote::create([
                'type' => 'Upvote',
                'discussion_id' => $discussion_id,
                'user_id' => Auth::user()->id,
            ]);
        }

        return redirect()->back();
    }

    public function voteDown($discussion_id)
    {
        $voteDown = Vote::where('discussion_id', $discussion_id)
            ->where('user_id', Auth::user()->id)
            ->where('type', 'Downvote')
            ->first();

        $voteUp = Vote::where('discussion_id', $discussion_id)
            ->where('user_id', Auth::user()->id)
            ->where('type', 'Upvote')
            ->first();

        if ($voteDown) {
            $voteDown->delete();
        } else {
            if ($voteUp) {
                $voteUp->delete();
            }

            Vote::create([
                'type' => 'Downvote',
                'discussion_id' => $discussion_id,
                'user_id' => Auth::user()->id,
            ]);
        }

        return redirect()->back();
    }
}
