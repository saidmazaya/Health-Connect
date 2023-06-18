@extends('admin.layout.main')

@section('title', 'Add Category')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Add Category</h4>
                            <form action="{{ route('category.store') }}" method="POST">
                                @csrf
                                <div class="form-group mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Category Name">
                                    @if ($errors->has('name'))
                                    <div class="alert alert-danger mt-2">
                                        @foreach ($errors->get('name') as $error)
                                        <p>{{ $error }}</p>
                                        @endforeach
                                    </div>
                                    @endif
                                </div>
                                <div class="form-group mb-3">
                                    <label for="type_id" class="form-label">Parent Type</label>
                                    <select name="type_id" id="type" class="form-select" required>
                                        <option value="">Select One</option>
                                        @foreach ($type as $data)
                                        <option value="{{ $data->id }}">{{ $data->name }}</option>
                                        @endforeach
                                    </select>
                                    @if ($errors->has('type_id'))
                                    <div class="alert alert-danger mt-2">
                                        @foreach ($errors->get('type_id') as $error)
                                        <p>{{ $error }}</p>
                                        @endforeach
                                    </div>
                                    @endif
                                </div>
                                <button type="submit" class="btn btn-primary me-2">Add</button>
                                <a href="{{ route('category.index') }}" class="btn btn-outline-secondary">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection