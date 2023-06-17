@extends('layout.home')

@section('title', 'Home')

@section('konten')

{{-- ganti ya za-Start --}}
<section id="hero" class="d-flex align-items-center">
  <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
    <div class="row justify-content-center">
      @guest
      <div class="col-xl-7 col-lg-9 text-center">
        <h1>Bersama Menciptakan Kehidupan Yang Baik</h1>
        <h2>Bergabung Ke dalam Komunitas Ini</h2>
      </div>
    </div>
    <div class="text-center">
      <a href="/register" class="btn-get-started scrollto">Register</a>
    </div>
    @endguest
    @auth
    <div class="col-xl-7 col-lg-9 text-center">
      <h1>Membantu dan Bertanya Mengenai Kesehatan</h1>
      <h2>Mulai Berdiskusi</h2>
    </div>
  </div>
  <div class="text-center">
    <a href="/forun" class="btn-get-started scrollto">Diskusi</a>
  </div>
  @endauth
  <div class="row icon-boxes">

    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
      <div class="icon-box">
        <div class="icon"><i class="bi bi-chat-left"></i> </div>
        <h4 class="title"><a href="/forum">Forum Diskusi</a></h4>
        <p class="description">Forum Dimana Tempat Bertanya Dan Menjawab</p>
      </div>
    </div>
    {{-- ganti ya za-END --}}

    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
      <div class="icon-box">
        <div class="icon"><i class="bi bi-heart-pulse"></i></div>
        <h4 class="title"><a href="/kategori">Kategori Penyakit</a></h4>
        <p class="description">Lihat Berdasar Kategori Penyakitnya</p>
      </div>
    </div>

    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
      <div class="icon-box">
        <div class="icon"><i class="bi bi-info-lg"></i></div>
        <h4 class="title"><a href="">Informasi</a></h4>
        <p class="description">Lihat Informasi Umum Seperti Gejala,Penyebab,Dan Cara Mencegah Suatu Penyakit</p>
      </div>
    </div>

    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
      <div class="icon-box">
        <div class="icon"><i class="bi bi-person-check"></i></div>
        <h4 class="title"><a href="">Verified Doctor</a></h4>
        <p class="description">Lihat Profil Dokter Terpercaya</p>
      </div>
    </div>

  </div>
  </div>
</section>

<main id="main">



  <!-- ======= Frequently Asked Questions Section ======= -->
  <section id="faq" class="faq section-bg">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Recently Asked Questions</h2>
      </div>
      {{-- Discussion-START --}}
      <div class="faq-list">
        <ul>
          @foreach ($discussion->sortByDesc('created_at')->take(5) as $data)
          <li data-aos="fade-up">
            <i class="bx bx-help-circle icon-help"></i>
            <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-{{ $data->id }}">
              {{ $data->title }}
              <i class="bx bx-chevron-down icon-show"></i>
              <i class="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-{{ $data->id }}" class="collapse show" data-bs-parent=".faq-list">
              <p>
                {{ Str::limit($data->content, 250, '...') }}
              </p>
            </div>
          </li>
          @endforeach
        </ul>
      </div>
      {{-- Discussion-END --}}


    </div>
  </section><!-- End Frequently Asked Questions Section -->



</main><!-- End #main -->



@endsection