@extends('admin.layout.main')

@section('title', 'Report Responses Message')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Report Response Message</h4>
                            <a href="{{ route('report-response.index') }}" class="btn btn-outline-info"><i class="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back</a>
                            @if (session('message'))
                            <div class="alert alert-success" role="alert">
                                {{ session('message') }}
                            </div>
                            @endif
                            <div class="my-3 col-12 col-sm-8 col-md-5">
                            </div>
                            <div class="table-responsive">
                                <div class="mb-3">
                                    <a href="{{ route('diskusi.show', $response->discussion->slug) }}" class="fs-3 text-decoration-none">{{ $response->discussion->title }}</a>
                                    <h5 class="mt-2" style="font-weight: 700">Response : {{ $response->content }}</h5>
                                </div>
                                @foreach ($reportResponse as $data)
                                <h5>User : {{ $data->user->name }}</h5>
                                <p class="mb-3">Message : {{ $data->content }}</p>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection