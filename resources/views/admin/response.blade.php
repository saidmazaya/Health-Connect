@extends('admin.layout.main')

@section('title', 'Response Table')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Response Tables</h4>
                            <div class="my-3 col-12 col-sm-8 col-md-5">
                                <form action="" method="GET">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" name="keyword" placeholder="Keyword">
                                        <button class="input-group-text btn-sm btn-primary">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover table-striped">
                                    @if ($response->isEmpty())
                                    <div class="alert alert-danger">Pencarian {{ $keyword }} tidak ditemukan </div>
                                    @else
                                    <thead class="table table-dark">
                                        <tr>
                                            <th>No.</th>
                                            <th style="width: 25%">Content</th>
                                            <th style="width: 25%">User</th>
                                            <th>Dicussion</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($response as $data)
                                        <tr>
                                            <td>{{ $loop->iteration + $response->firstItem() - 1 }}</td>
                                            <td>{{ Str::limit($data->content, 30, '...') }}</td>
                                            <td>{{ $data->user->name }}</td>
                                            <td>{{ Str::limit($data->discussion->title, 30, '...') }}</td>
                                            <td>{{ $data->status }}</td>
                                            <td>
                                                <a href="{{ route('diskusi.show', $data->discussion->slug) }}" class="btn-sm text-decoration-none btn-info"><i class="fa-solid fa-circle-info"></i></a>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                    @endif
                                </table>
                            </div>
                            {{ $response->withQueryString()->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection