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
        {{-- Forum - START --}}
        @foreach ($parent as $data)
      <h4 class="mb-3">{{ $data->name }}</h4>
      <ul class="mb-5">
        @foreach ($category->where('type_id', $data->id) as $item)
        <li><a href="/diskusi">
            <h5>{{ $item->name }}<h5>
          </a></li>
        @endforeach
      </ul>
      @endforeach
      {{ $parent->links() }}
      {{-- Forum - END --}}
      </p>
    </div>
  </section>

</main><!-- End #main -->
@endsection