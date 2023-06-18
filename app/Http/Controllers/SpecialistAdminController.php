<?php

namespace App\Http\Controllers;

use App\Http\Requests\SpecialistCreateRequest;
use App\Models\Specialist;
use Illuminate\Http\Request;

class SpecialistAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $specialist = Specialist::where(function ($query) use ($keyword) {
            $query->where('name', 'LIKE', '%' . $keyword . '%');
        })
            ->orderBy('name')
            ->paginate(10);

        return view('admin.specialist.specialist', compact('specialist', 'keyword'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.specialist.specialist-add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SpecialistCreateRequest $request)
    {
        $specialist = Specialist::create($request->all());

        return redirect(route('specialist.index'))->with('message', 'Penambahan Data Perhasil');
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
    public function edit($id)
    {
        $specialist = Specialist::findOrFail($id);

        return view('admin.specialist.specialist-edit', compact('specialist'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $specialist = Specialist::findOrFail($id);

        $specialist->update($request->all());

        return redirect(route('specialist.index'))->with('message', 'Perubahan Data Specialist Berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
