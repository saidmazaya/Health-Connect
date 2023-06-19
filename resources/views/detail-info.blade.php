@extends('layout.home')

@section('title', 'Detail Info')

@section('konten')
<main id="main">

  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
    </div>
  </section>

  {{-- ganti ya za-START --}}
  <div class="container" data-aos="fade-up">

    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <div class="">
                  <div class="portfolio-description">
                    <h2>{{ $article->title }}</h2>
                    <p>
                      {!! $article->content !!}
                    </p>
                  </div>
                </div>


              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>
                @if ($article->image != NULL)
                <img style="border-radius: 10px;height:auto;width:200px" src="{{ asset('storage/photo/'.$article->image)}}" alt="">
                @endif
              </h3>

              <ul>
                <li>Kategori Artikel: <a href="{{ route('kategori.show', $article->category->slug) }}" style="color: blue" class="btn">{{ $article->category->name }}</a> </li>
              </ul>
            </div>
            <div class="portfolio-description">

            </div>

          </div>

        </div>
      </div>

  </div>
  </section>

  {{-- ganti ya za-END --}}



  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
    </div>
  </section>

</main>
@endsection