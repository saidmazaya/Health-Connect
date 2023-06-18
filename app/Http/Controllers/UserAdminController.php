<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Response;
use App\Models\Discussion;
use App\Models\Specialist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class UserAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $user = User::with(['articles', 'discussion'])
            ->where(function ($query) use ($keyword) {
                $query->where('name', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('username', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('email', 'LIKE', '%' . $keyword . '%');
            })
            ->where('role_id', 2)
            ->paginate(10);

        $specialist = Specialist::select('id', 'name')
            ->where('id', '!=', 1)
            ->get();
        return view('admin.user.user', compact('user', 'keyword', 'specialist'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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

    public function userTrack($username)
    {
        $user = User::where('username', $username)->first();

        $discussion = Discussion::where('author_id', $user->id)->get();

        $response = Response::where('user_id', $user->id)->get();

        return view('admin.user.user-track', compact('user', 'discussion', 'response'));
    }

    public function userUpgrade(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if ($user) {
            $user->role_id = 3;
            $user->specialist_id = $request->specialist_id;
            $user->save();

            return redirect(route('user.index'))->with('message', 'Role User telah berhasil diganti menjadi Dokter.');
        }
    }
}
