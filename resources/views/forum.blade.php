@extends('layout.home')

@section('title', 'Our Story')

@section('content')
<section id="about" class="about mt-5">
    <div class="container">

        <div class="section-title">
            <h3>Daftar Komunitas</h3>
        </div>

        <div>
            <h4>1.Diabetes</h4>
            @foreach ($collection as $item)
                
            @endforeach
        </div>
    </div>
</section><!-- End About Section -->
@endsection
@section('cssnav', 'header-inner-pages')