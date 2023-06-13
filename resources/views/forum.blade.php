@extends('layout.main')

@section('title', 'Forum')

@section('content')
<section id="about" class="about mt-5">
    <div class="container">

        <div class="section-title">
            <h3>Daftar Komunitas</h3>
        </div>

        <div>
            <h4>1. Diabetes</h4>
                @foreach ($dat->where('id', '<=', 5) as $item) 
                <p style="margin-left:10px">{{ $loop->iteration }}. <a href="{{route('tag.detail', $item->slug)}}">{{$item->name}}</a></p>
                @endforeach

                <h4>2. Kazuha</h4>
                @foreach ($dat->whereBetween('id', [6, 10]) as $item)
                <li style="margin-left:24px">{{$item->name}}</li>
                @endforeach
        </div>
    </div>
</section>
@endsection
@section('cssnav', 'header-inner-pages')