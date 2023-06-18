<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Response;
use App\Models\Discussion;
use Illuminate\Http\Request;

class DoctorAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $user = User::with(['articles', 'discussion', 'specialist'])
            ->where(function ($query) use ($keyword) {
                $query->where('name', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('username', 'LIKE', '%' . $keyword . '%')
                    ->orWhere('email', 'LIKE', '%' . $keyword . '%');
            })
            ->where('role_id', 3)
            ->paginate(10);

        return view('admin.doctor.doctor', compact('user', 'keyword'));
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

        return view('admin.doctor.doctor-track', compact('user', 'discussion', 'response'));
    }

    public function doctorDemote($id)
    {
        $user = User::findOrFail($id);

        if ($user) {
            $user->role_id = 2;
            $user->specialist_id = 1;
            $user->save();

            return redirect()->back()->with('message', 'Role Doctor telah berhasil diganti menjadi User.');
        }
    }
}
