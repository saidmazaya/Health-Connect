@extends('layout.home')

@section('title', 'Forum Diskusi')

@section('konten')
<title>Edit Profile</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />


<section class="breadcrumbs">
    <div class="container">

    </div>
</section>

<div class="d-flex justify-content-center align-items-center vh-100 mt-3 " data-aos="fade-up">
    <form class="shadow w-50 p-3" action="{{ route('profil.update', Auth::user()->id) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <h4 class="display-4  fs-1">Profile Information</h4><br>
        <div class="mb-3">
            <label class="form-label">Photo : </label>
            @if (Auth::user()->image != null)
            <div class="image-container">
                <img src="{{ asset('storage/photo/'.Auth::user()->image) }}" class="rounded-image">
            </div>
            @else
            -
            @endif

            <input type="file" class="form-control mt-2" name="photo" id="photo">
            <button class="btn btn-primary mt-3" type="submit">Update</button>
            <button class="btn btn-danger mt-3" type="submit" form="_delete">Remove</button>
            @if ($errors->has('photo'))
            <div class="text-danger mt-2">
                @foreach ($errors->get('photo') as $error)
                <p>{{ $error }}</p>
                @endforeach
            </div>
            @endif
        </div>

        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" name="name" id="name" value="{{ Auth::user()->name }}">
            @if ($errors->has('name'))
            <div class="text-danger mt-2">
                @foreach ($errors->get('name') as $error)
                <p>{{ $error }}</p>
                @endforeach
            </div>
            @endif
        </div>

        <div class="mb-3">
            <label class="form-label">Bio</label>
            <input type="text" class="form-control" name="bio" id="bio" value="{{ Auth::user()->bio }}">
            @if ($errors->has('bio'))
            <div class="text-danger mt-2">
                @foreach ($errors->get('bio') as $error)
                <p>{{ $error }}</p>
                @endforeach
            </div>
            @endif
        </div>

        <div class="mb-3">
            <label class="form-label">About</label>
            <input type="text" class="form-control" name="about" id="about" value="{{ Auth::user()->about }}">
            @if ($errors->has('about'))
            <div class="text-danger mt-2">
                @foreach ($errors->get('about') as $error)
                <p>{{ $error }}</p>
                @endforeach
            </div>
            @endif
        </div>

        <div class="mb-3 d-flex justify-content-end">
            <a href="{{ route('profil.show', Auth::user()->username) }}" class="btn btn-secondary">Cancel</a>&nbsp;
            <button type="submit" class="btn btn-primary">Save</button>
        </div>
    </form>
</div>
<form id="_delete" action="{{ route('profile.delete-image', Auth::user()->id) }}" method="post">
    @csrf
    @method('DELETE')
</form>

<section class="breadcrumbs">
    <div class="container">

    </div>
</section>
@endsection
@push('css')
<style>
    .rounded-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        /* Membuat gambar menjadi bentuk bulat */
    }

    .image-container {
        width: 100px;
        /* Lebar yang diinginkan */
        height: 100px;
        /* Tinggi yang diinginkan */
        overflow: hidden;
    }
</style>
@endpush