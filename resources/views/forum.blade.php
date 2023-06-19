@extends('layout.home')

@section('title', 'Forum Diskusi')

@section('konten')
<!-- ======= Breadcrumbs ======= -->
<main id="main">
  <section class="breadcrumbs">
    <div class="container">


    </div>
  </section><!-- End Breadcrumbs -->

  <section class="inner-page">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="d-flex justify-content-between align-items-center ">
        <h2>Forum Diskusi</h2>
        {{-- <ol>
          <li><a href="index.html">Home</a></li>
          <li>Inner Page</li>
        </ol> --}}
      </div>
      <p>
        <hr>
        {{-- Forum - START --}}
        @foreach ($parent as $data)
      <h4 class="mb-3"><i>{{ $data->name }}</i></h4>

      @foreach ($category->where('type_id', $data->id) as $item)
      <a href="{{ route('kategori.detail', $item->slug) }}">
        <h5>{{ $item->name }}<h5>
      </a>
      @endforeach
      <hr>
      @endforeach
      {{ $parent->links() }}
      {{-- Forum - END --}}

      </p>
    </div>
  </section>

</main><!-- End #main -->
@endsection