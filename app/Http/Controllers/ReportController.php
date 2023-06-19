<?php

namespace App\Http\Controllers;

use App\Models\ReportDiscussion;
use App\Models\ReportResponse;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function ReportDiscussion(Request $request) {
        $report = ReportDiscussion::create($request->all());
        
        return redirect()->back()->with('message', 'Report Berhasil, Mohon tunggu persetujuan admin');
    }

    public function ReportResponse(Request $request) {
        $report = ReportResponse::create($request->all());
        
        return redirect()->back()->with('message', 'Report Berhasil, Mohon tunggu persetujuan admin');
    }
}
