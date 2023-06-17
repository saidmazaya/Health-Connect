<?php

namespace App\Http\Controllers;

use App\Models\Response;
use Illuminate\Http\Request;
use App\Models\ReportResponse;
use Illuminate\Support\Facades\DB;

class ReportResponseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $reportResponse = ReportResponse::with('response')
            ->where(function ($query) use ($keyword) {
                $query->whereHas('response', function ($query) use ($keyword) {
                    $query->where('content', 'LIKE', '%' . $keyword . '%');
                });
            })
            ->select('response_id', DB::raw('count(*) as total_reports'))
            ->groupBy('response_id')
            ->orderBy('total_reports', 'desc')
            ->paginate(10);

        return view('admin.reports.report-response', compact('reportResponse', 'keyword'));
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
    public function show($response_id)
    {
        // Mengambil seluruh report response berdasarkan response_id yang diambil
        $reportResponse = ReportResponse::with(['user', 'response'])
            ->where('response_id', $response_id)->get();

        // Mengambil response saja
        $response = Response::with('discussion')
            ->where('id', $response_id)->first();
        // Lakukan tindakan lain terhadap $reportResponse, seperti menampilkan data atau mengirimkan notifikasi

        return view('admin.reports.report-response-detail', compact('reportResponse', 'response'));
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

    public function acceptReport(Request $request)
    {
        $responseId = $request->input('response_id');

        Response::where('id', $responseId)->update(['status' => 'Deleted']);
        ReportResponse::where('response_id', $responseId)->delete();

        // Setelah menghapus data, Anda dapat melakukan tindakan lain seperti mengirimkan notifikasi atau mengatur pesan berhasil
        // ...

        return redirect()->back()->with('message', 'Response dan Report yang berhubungan telah diterima dan dihapus.');
    }

    public function rejectReport(Request $request)
    {
        $responseId = $request->input('response_id');

        // dd($responseId);
        // Hapus report berdasarkan ID
        ReportResponse::where('response_id', $responseId)->delete();

        // Setelah menghapus data, Anda dapat melakukan tindakan lain seperti mengirimkan notifikasi atau mengatur pesan berhasil
        // ...

        return redirect()->back()->with('message', 'Report telah ditolak dan dihapus.');
    }
}
