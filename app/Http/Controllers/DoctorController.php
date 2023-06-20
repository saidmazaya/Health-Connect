<?php

namespace App\Http\Controllers;

use App\Models\Specialist;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $specialist = Specialist::select('id', 'name', 'gelar')
            ->where('id', '!=', 1)
            ->where('name', 'LIKE', '%' . $search . '%')
            ->paginate(9);

        return view('dokter', compact('specialist', 'search'));
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
    public function show($id)
    {
        $specialist = Specialist::with('user')
            ->whereHas('user', function ($query) {
                $query->where('role_id', 3);
            })
            ->find($id);

        return view('list-dokter', compact('specialist'));
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
