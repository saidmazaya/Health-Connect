<?php

namespace App\Http\Controllers;

use App\Models\VoteResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VoteResponseController extends Controller
{
    public function voteUp($response_id)
    {
        $voteUp = VoteResponse::where('response_id', $response_id)
            ->where('user_id', Auth::user()->id)
            ->where('type', 'Upvote')
            ->first();

        $voteDown = VoteResponse::where('response_id', $response_id)
            ->where('user_id', Auth::user()->id)
            ->where('type', 'Downvote')
            ->first();

        if ($voteUp) {
            $voteUp->delete();
        } else {
            if ($voteDown) {
                $voteDown->delete();
            }

            VoteResponse::create([
                'type' => 'Upvote',
                'response_id' => $response_id,
                'user_id' => Auth::user()->id,
            ]);
        }

        return redirect()->back();
    }

    public function voteDown($response_id)
    {
        $voteDown = VoteResponse::where('response_id', $response_id)
            ->where('user_id', Auth::user()->id)
            ->where('type', 'Downvote')
            ->first();

        $voteUp = VoteResponse::where('response_id', $response_id)
            ->where('user_id', Auth::user()->id)
            ->where('type', 'Upvote')
            ->first();

        if ($voteDown) {
            $voteDown->delete();
        } else {
            if ($voteUp) {
                $voteUp->delete();
            }

            VoteResponse::create([
                'type' => 'Downvote',
                'response_id' => $response_id,
                'user_id' => Auth::user()->id,
            ]);
        }

        return redirect()->back();
    }
}
