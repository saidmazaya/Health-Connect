<?php

namespace App\Http\Controllers;

use App\Models\Discussion;
use Illuminate\Http\Request;
use App\Models\ReportDiscussion;
use Illuminate\Support\Facades\DB;

class ReportDiscussionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $reportDiscussions = ReportDiscussion::with('discussion')
            ->where(function ($query) use ($keyword) {
                $query->whereHas('discussion', function ($query) use ($keyword) {
                    $query->where('title', 'LIKE', '%' . $keyword . '%');
                });
            })
            ->select('discussion_id', DB::raw('count(*) as total_reports'))
            ->groupBy('discussion_id')
            ->orderBy('total_reports', 'desc')
            ->paginate(10);

        return view('admin.reports.report-discussion', compact('reportDiscussions', 'keyword'));
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
    public function show($discussion_id)
    {
        // Mengambil seluruh report discussion berdasarkan discussion_id yang diambil
        $reportDiscussions = ReportDiscussion::with(['user', 'discussion'])
            ->where('discussion_id', $discussion_id)->get();

        // Mengambil discussion saja
        $discussion = Discussion::where('id', $discussion_id)->first();
        // Lakukan tindakan lain terhadap $reportDiscussions, seperti menampilkan data atau mengirimkan notifikasi

        return view('admin.reports.report-discussion-detail', compact('reportDiscussions', 'discussion'));
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
        $discussionId = $request->input('discussion_id');

        Discussion::where('id', $discussionId)->update(['status' => 'Deleted']);
        ReportDiscussion::where('discussion_id', $discussionId)->delete();

        // Setelah menghapus data, Anda dapat melakukan tindakan lain seperti mengirimkan notifikasi atau mengatur pesan berhasil
        // ...

        return redirect()->back()->with('message', 'Discussion dan Report yang berhubungan telah diterima dan dihapus.');
    }

    public function rejectReport(Request $request)
    {
        $discussionId = $request->input('discussion_id');

        // dd($discussionId);
        // Hapus report berdasarkan ID
        ReportDiscussion::where('discussion_id', $discussionId)->delete();

        // Setelah menghapus data, Anda dapat melakukan tindakan lain seperti mengirimkan notifikasi atau mengatur pesan berhasil
        // ...

        return redirect()->back()->with('message', 'Report telah ditolak dan dihapus.');
    }
}
