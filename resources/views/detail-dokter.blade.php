@extends('layout.home')

@section('title', 'Detail Dokter')

@section('konten')
<main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Informasi</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Portfolio Details</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img src="/assets/img/team/orang3.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/team/orang1.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/assets/img/team/orang2.jpg" alt="">
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Cara Menangani Luka</h3>
              <ul>
                <li><strong>1.</strong>Tertawa</li>
                <li><strong>2.</strong>Menangis</li>
                <li><strong>3.</strong>Sedih</li>
                <li><strong>4.</strong>Pasrah</li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>Bagaimana Cara Merawat Luka Terbuka?</h2>
              <p>
                Siram dengan Alkohol Lalu Cuci Dengan Aplikasi Website Health Connect dan Jangan Lupa Untuk Mendaftar Akun Premium  
              </p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Details Section -->

  </main>
@endsection