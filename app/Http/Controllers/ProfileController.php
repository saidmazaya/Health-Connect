<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Models\User;
use App\Models\Discussion;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show($username)
    {
        $user = User::where('username', $username)->first();

        if ($user) {
            $discussion = Discussion::where('author_id', $user->id)
                ->where('status', 'Published')
                ->get();

            return view('profil', compact('user', 'discussion'));
        } else {
            abort(404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($username)
    {
        $user = User::where('username', $username)->first();

        if ($user->id !== auth()->user()->id) {
            abort(403, 'Unauthorized');
        }
        $users = auth()->user();

        return view('edit-profil', compact('users'));
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(ProfileRequest $request, $id)
    {
        $user = User::findOrFail($id);

        if ($user->id !== auth()->user()->id) {
            abort(403, 'Unauthorized');
        }

        if ($request->hasFile('photo')) {
            $oldPhotoPath = $user->image; // Path foto lama yang disimpan dalam database

            if ($oldPhotoPath != '') {
                // Hapus foto lama dari sistem file menggunakan Storage::delete()
                Storage::disk('public')->delete('photo/' . $oldPhotoPath);
            }

            // Simpan Foto Baru
            $extension = $request->file('photo')->getClientOriginalExtension();
            $today = now()->format('dmY_His');
            $newName = Auth::user()->username . '-' . 'profile-image' . '-' . $today . '-' . now()->timestamp . '-' . Str::random(10) . '.' . $extension;
            $request->file('photo')->storeAs('photo', $newName);

            $request['image'] = $newName;
        }

        $user->update($request->all());

        return redirect(route('profil.show', $user->username))->with('message', 'Profil berhasil diperbarui.');
    }

    public function deleteProfile($id)
    {
        $user = User::findOrFail($id);

        if ($user->id !== auth()->user()->id) {
            abort(403, 'Unauthorized');
        }

        // Hapus foto lama jika ada
        if ($user->image != '') {
            Storage::disk('public')->delete('photo/' . $user->image);
        }

        $user->image = NULL;

        $user->save();

        return redirect(route('profil.show', $user->username))->with('message', 'Profil berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
