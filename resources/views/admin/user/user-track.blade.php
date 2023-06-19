@extends('admin.layout.main')

@section('title', 'User Tracks Detail')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">User Track Detail</h4>
                            <a href="{{ route('user.index') }}" class="btn btn-outline-info"><i class="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back</a>
                            @if (session('message'))
                            <div class="alert alert-success" role="alert">
                                {{ session('message') }}
                            </div>
                            @endif
                            <div class="my-3 col-12 col-sm-8 col-md-5">
                            </div>
                            <div class="table-responsive">
                                <div class="mb-3">
                                    <a href="#" class="fs-3 text-decoration-none">User : {{ $user->name }}</a> <br>
                                    <h4 class="my-3 fs-4">Track Record : </h4>
                                </div>

                                {{-- Discussion --}}
                                <h4>Discussion : </h4>
                                @if ($discussion == '[]')
                                <h6 class="mb-4">Belum Ada Diskusi Yang Dibuat User Ini</h6>
                                @else
                                @foreach ($discussion as $data)
                                @php
                                $reportCountDiscuss = DB::table('report_discussions')->where('discussion_id', $data->id)->count();
                                @endphp
                                <a href="{{ route('diskusi.show', $data->slug) }}" class="text-decoration-none">Title : {{ $data->title }}</a>
                                <p>Content : {{ Str::limit($data->content, 50, '...') }}</p>
                                <p class="mb-3">Report : {{ $reportCountDiscuss }}</p>
                                @endforeach
                                @endif

                                {{-- Response --}}
                                <h4>Response : </h4>
                                @if ($response == '[]')
                                <h6 class="mb-4">Belum Ada Response Yang Dibuat User Ini</h6>
                                @else
                                @foreach ($response as $data)
                                @php
                                $reportCountResponse = DB::table('report_responses')->where('response_id', $data->id)->count();
                                @endphp
                                <a href="{{ route('diskusi.show', $data->discussion->slug) }}" class="text-decoration-none">Discussion Title : {{ $data->discussion->title }}</a>
                                <p class="mb-3">Content : {{ Str::limit($data->content, 50, '...') }}</p>
                                <p class="mb-3">Report : {{ $reportCountResponse }}</p>
                                @endforeach
                                @endif


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection