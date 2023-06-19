@extends('layout.home')

@section('title', 'List')

@section('konten')
<!-- ======= Breadcrumbs ======= -->
<main id="main">
  <section class="breadcrumbs">
    <div class="container">

    </div>
  </section><!-- End Breadcrumbs -->



  <section id="services" class="services section-bg">
    <div class="container" data-aos="fade-up">
      <h2 class="text-capitalize">Daftar Dokter <b>{{ $specialist->name }}</b> Tersedia</h2>
      <div class="row">
        {{-- form dokter --}}




        @foreach ($specialist->user as $data)
        <div class="col-lg-4 col-md-6 mt-3 align-items-stretch " data-aos="zoom-in" data-aos-delay="100">
          <div class="icon-box">
            @if ($data->image != null)
            <img style="height: 310px;width: 310px" src="{{ asset('storage/photo/'.$data->image) }}" alt="">
            @else
            <img style="height: 310px;width: 310px" src="/images/default-user.png" alt="">
            @endif
            @if ($data->specialist->id == 1)
            <h4><a href="#">dr.{{ $data->name }}</a></h4>
            @elseif($data->specialist->id == 2)
            <h4><a href="#">dr.{{ $data->name }}</a></h4>
            @else
            <h4><a href="#">dr.{{ $data->name }} {{ $data->specialist->name }}</a></h4>
            @endif
            @if ($data->bio == '')
            -
            @else
            <p>{{ $data->bio }}</p>
            @endif
          </div>
        </div>
        @endforeach

        {{-- form dokter end --}}

      </div>

    </div>
  </section>

  </div>


</main><!-- End #main -->
@endsection