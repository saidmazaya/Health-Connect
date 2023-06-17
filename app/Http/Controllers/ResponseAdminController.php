<?php

namespace App\Http\Controllers;

use App\Models\Response;
use Illuminate\Http\Request;

class ResponseAdminController extends Controller
{
    public function index(Request $request)
    {
        $keyword = $request->keyword;
        $response = Response::with(['user', 'discussion'])
            ->where(function ($query) use ($keyword) {
                $query->where('content', 'LIKE', '%' . $keyword . '%')
                    ->orWhereHas('user', function ($query) use ($keyword) {
                        $query->where('name', 'LIKE', '%' . $keyword . '%');
                    })
                    ->orWhereHas('discussion', function ($query) use ($keyword) {
                        $query->where('title', 'LIKE', '%' . $keyword . '%');
                    });
            })
            // ->whereHas('user', function ($query) {
            //     $query->where('role_id', '!=', 1);
            // })
            ->where('status', 'Published')
            ->orderBy('id', 'asc')
            ->paginate(10);
        return view('admin.response', compact('response', 'keyword'));
    }
}
