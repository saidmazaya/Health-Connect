@extends('layout.home')

@section('title', 'Diskusi')

@section('konten')

<section class="breadcrumbs">
    <div class="container">

    </div>
</section>

<div class="container-fluid page-body-wrapper mt-4" data-aos="fade-up">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Buat Diskusi</h4>
                            <form action="{{ route('diskusi.store') }}" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group mb-3">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" id="title" name="title">
                                    @if ($errors->has('title'))
                                    <div class="alert alert-danger mt-2">
                                        @foreach ($errors->get('title') as $error)
                                        <p>{{ $error }}</p>
                                        @endforeach
                                    </div>
                                    @endif
                                </div>

                                <div class="form-group mb-3">
                                    <label for="content">Content</label>
                                    <textarea name="content" id="content" cols="30" rows="10" class="form-control"></textarea>
                                    @if ($errors->has('content'))
                                    <div class="alert alert-danger mt-2">
                                        @foreach ($errors->get('content') as $error)
                                        <p>{{ $error }}</p>
                                        @endforeach
                                    </div>
                                    @endif
                                </div>

                                <input type="hidden" name="author_id" value="">
                                <div class="form-group mb-3">
                                    <label for="category" class="form-label">Category</label>
                                    <select name="category_id" id="category" class="form-select">
                                        <option value="">Select One</option>
                                        @foreach ($category as $data)
                                        <option value="{{ $data->id }}">{{ $data->name }}</option>
                                        @endforeach
                                    </select>
                                    @if ($errors->has('category_id'))
                                    <div class="alert alert-danger mt-2">
                                        @foreach ($errors->get('category_id') as $error)
                                        <p>{{ $error }}</p>
                                        @endforeach
                                    </div>
                                    @endif
                                    </select>
                                    <input type="hidden" name="status" value="Published">
                                    <input type="hidden" name="author_id" value="{{ Auth::user()->id }}">
                                </div>
                                <button type="submit" class="btn btn-primary me-2">Publish</button>
                                <a href="{{ redirect()->back()->getTargetUrl() }}" class="btn btn-outline-secondary">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="breadcrumbs">
    <div class="container">

    </div>
</section>

@endsection