@extends('admin.layout.main')

@section('title', 'Add Specialist')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Add Specialist</h4>
                            <form action="{{ route('specialist.store') }}" method="POST">
                                @csrf
                                <div class="form-group mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Specialist Name" required>
                                    @if ($errors->has('name'))
                                    <div class="alert alert-danger mt-2">
                                        @foreach ($errors->get('name') as $error)
                                        <p>{{ $error }}</p>
                                        @endforeach
                                    </div>
                                    @endif
                                </div>
                                <div class="form-group mb-3">
                                    <label for="gelar" class="form-label">Gelar</label>
                                    <input type="text" class="form-control" id="gelar" name="gelar" placeholder="Nama Gelar" required>
                                    @if ($errors->has('gelar'))
                                    <div class="alert alert-danger mt-2">
                                        @foreach ($errors->get('gelar') as $error)
                                        <p>{{ $error }}</p>
                                        @endforeach
                                    </div>
                                    @endif
                                </div>
                                <button type="submit" class="btn btn-primary me-2">Add</button>
                                <a href="{{ route('specialist.index') }}" class="btn btn-outline-secondary">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection