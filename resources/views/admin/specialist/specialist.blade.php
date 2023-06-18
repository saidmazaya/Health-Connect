@extends('admin.layout.main')

@section('title', 'Specialist Table')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Specialist Tables</h4>
                            <div class="my-3">
                                <a href="{{ route('specialist.create') }}" class="btn btn-outline-info">Add Data</a>
                            </div>
                            @if (session('message'))
                            <div class="alert alert-success" role="alert">
                                {{ session('message') }}
                            </div>
                            @endif
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
                                    @if ($specialist->isEmpty())
                                    <div class="alert alert-danger">Pencarian {{ $keyword }} tidak ditemukan </div>
                                    @else
                                    <thead class="table table-dark">
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Gelar</th>
                                            <th style="width: 25%">Jumlah User</th>
                                            <th style="width: 25%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($specialist as $data)
                                        <tr>
                                            <td>{{ $loop->iteration + $specialist->firstItem() - 1 }}</td>
                                            <td>{{ $data->name }}</td>
                                            <td>{{ $data->gelar }}</td>
                                            @php
                                            $specialistCount = DB::table('users')->where('specialist_id', $data->id)->count();
                                            @endphp
                                            <td>{{ $specialistCount }}</td>
                                            <td>
                                                <a href="#" class="btn-sm text-decoration-none btn-info">Detail</a>
                                                | <a href="{{ route('specialist.edit', $data->id) }}" class="btn-sm text-decoration-none btn-primary">Edit</a>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                    @endif
                                </table>
                            </div>
                            {{ $specialist->withQueryString()->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection