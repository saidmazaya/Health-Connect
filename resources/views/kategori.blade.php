@extends('layout.home')

@section('title', 'Kategori')

@section('konten')
<!-- ======= Breadcrumbs ======= -->
<main id="main">
  <section class="breadcrumbs">
    <div class="container">


    </div>
  </section><!-- End Breadcrumbs -->

  <section class="inner-page">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="d-flex justify-content-between align-items-center section-title">
        <h2>Kategori</h2>
        {{-- <ol>
          <li><a href="index.html">Home</a></li>
          <li>Inner Page</li>
        </ol> --}}
      </div>
      <p>
        {{-- Category - START --}}

        {{-- Search --}}
        <div class="row mb-3">
          <!-- Paginasi huruf A-Z di sebelah kiri -->
          <div class="col-8 d-flex justify-content-start">
            @foreach ($letters as $letter)
              <a class="me-2" href="{{ route('kategori.index', ['letter' => $letter]) }}">{{ $letter }}</a>
            @endforeach
          </div>
        
          <!-- Form pencarian di sebelah kanan -->
          <div class="col-4 d-flex justify-content-end">
            <form action="{{ route('kategori.index') }}" method="GET" class="mb-3">
              <div class="input-group">
                <input type="text" name="search" class="form-control form-control-sm" placeholder="Cari kategori">
                <button type="submit" class="btn btn-primary">Cari</button>
              </div>
            </form>
          </div>
        </div>
        

      <!-- Tampilkan kategori sesuai dengan halaman yang dipilih -->
      <div class="mb-2">
        @if ($paginator->isEmpty())
            <p>Tidak ada kategori yang sesuai dengan pencarian.</p>
        @else
            @foreach ($paginator as $category)
                <h6>
                    <a class="fs-6" href="{{ route('kategori.detail', $category->slug) }}">{{ $category->name }}</a>
                </h6>
            @endforeach
        @endif
    </div>
    

      <!-- Paginasi bawah dengan jumlah halaman -->
      {{ $paginator->links() }}

      {{-- Category - END --}}
      </p>
    </div>
  </section>
  <section class="breadcrumbs">
    <div class="container">


    </div>
  </section>
</main><!-- End #main -->
@endsection