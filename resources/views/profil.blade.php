@extends('layout.home')

@section('title', 'Profil')

@section('konten')
<main id="main">
  <!-- ======= Portfolio Details Section ======= -->
  <!-- ======= Breadcrumbs ======= -->
  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">

    </div>
  </section><!-- End Breadcrumbs -->

  <section id="portfolio-details" class="portfolio-details" data-aos="fade-up">
    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-8">
          <div class="portfolio-details-slider swiper">
            <div class="swiper-wrapper align-items-center">
              <div class="">
                @if (session('message'))
                <div class="alert alert-success mt-3" role="alert">
                  {{ session('message') }}
                </div>
                @endif
                About
                <p>
                  @if ($user->about == '')
                  -
                  @else
                  {{ $user->about }}
                  @endif
                </p>
                <div class="portfolio-description">
                  <h3>Diskusi</h3>

                  @foreach ($discussion as $data)
                  {{-- sejarah diskusi --}}

                  <div style="margin-left: 12px" class="container">
                    <p style="font-size: 20px"> </p>
                    <div>
                      <b>{{ $data->title }}</b> <i>{{ $data->created_at->format('d M, Y') }} </i>

                      {{-- tombol edit dan remove --}}


                      @if (Auth::user()->id == $data->user->id)
                      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        <a><i class="bi bi-pencil-square"></i></a>
                      </button>
                      <form class="dropdown-menu p-4" action="{{ route('diskusi.update', $data->id) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div><i>Edit</i></div>
                        <div class="mb-3">
                          <textarea name="content" id="content" cols="30" rows="10" required>{{ $data->content }}</textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                      @endif

                      @if (Auth::user()->id == $data->user->id)
                      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        <a><i class="bi bi-trash"></i></a>
                      </button>
                      <form class="dropdown-menu p-4" method="POST" action="{{ route('diskusi.destroy', $data->id) }}">
                        @csrf
                        @method('DELETE')
                        <div><i>Apakah Anda Yakin Ingin Menghapus Ini?</i></div>
                        <button type="submit" class="btn btn-danger mt-2">Hapus</button>
                      </form>
                      @endif

                      {{-- tombol edit dan remove END --}}
                    </div>

                    <div>
                      {{ Str::limit($data->content, 80, '...') }} <a href="{{ route('diskusi.show', $data->slug) }}">Read More...</a>
                    </div>
                    @php
                    $voteUp = DB::table('votes')
                    ->where('discussion_id', $data->id)
                    ->where('type', 'Upvote')
                    ->count();
                    $voteDown = DB::table('votes')
                    ->where('discussion_id', $data->id)
                    ->where('type', 'Downvote')
                    ->count();
                    @endphp
                    <form action="{{ route('diskusi.category', $data->id) }}" method="POST">
                      @csrf
                      @method('PUT')
                      <a class="btn"><i class="bi bi-arrow-up disabled">{{ $voteUp }}</i></a>
                      <a class="btn"><i class="bi bi-arrow-down disabled">{{ $voteDown }}</i></a>
                      <a class="btn" href="{{ route('kategori.detail', $data->category->slug) }}"><i class="bi bi-heart-pulse"> {{ $data->category->name }}</i></a>

                      @php
                      $category = DB::table('categories')
                      ->where('id', '!=', $data->category_id)
                      ->select('id', 'name')
                      ->orderBy('name')
                      ->get();
                      @endphp
                      @if (Auth::user()->id == $data->user->id)
                      <select name="category_id" id="category" required>
                        @if ($data->category != '')
                        <option value="{{ $data->category->id }}">{{ $data->category->name }}</option>
                        @else
                        <option value="">Select One</option>
                        @endif
                        @foreach ($category as $data)
                        <option value="{{ $data->id }}">{{ $data->name }}</option>
                        @endforeach
                      </select>
                      <button type="submit" class="btn btn-sm btn-primary">Submit</button>
                      @endif
                    </form>
                  </div>
                  <hr>

                  {{-- sejarah diskusi END --}}
                  @endforeach

                  {{-- Ignore This :) --}}
                  <div class="container">
                    <br><br><br><br><br><br>
                    <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br><br><br><br><br><br><br><br><br>
                  </div>
                  {{-- Ignore This :) --}}
                </div>

              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="portfolio-info">
            @if ($user->image != null)
            <h3><img style="border-radius: 10px;height:auto;width:200px" src="{{ asset('storage/photo/'.$user->image) }}" alt=""></h3>
            @else
            <h3><img style="border-radius: 10px;height:auto;width:200px" src="/images/default-user.png" alt=""></h3>
            @endif
            <ul>
              @if ($user->specialist->id == 1)
              <li><strong>Nama</strong>: {{ $user->name }}
                @if (Auth::user()->id == $user->id)
                <a href="{{ route('profil.edit', $user->username) }}"><i class="bi bi-pencil-square">Edit</i></a>
                @endif
              </li>
              @elseif($user->specialist->id == 2)
              <li><strong>Nama</strong>: dr.{{ $user->name }}
                @if (Auth::user()->id == $user->id)
                <a href="{{ route('profil.edit', $user->username) }}"><i class="bi bi-pencil-square">Edit</i></a>
                @endif
              </li>
              @else
              <li><strong>Nama</strong>: dr.{{ $user->name }} {{ $user->specialist->name }}
                @if (Auth::user()->id == $user->id)
                <a href="{{ route('profil.edit', $user->username) }}"><i class="bi bi-pencil-square">Edit</i></a>
                @endif
              </li>
              @endif
              @if ($user->role_id == 3)
              <li><strong>Email</strong>: {{ $user->email }}</li>
              @endif
              @if ($user->role_id == 3)
              <li><strong>Spesialis</strong>: Dokter {{ $user->specialist->name }}</li>
              @endif
              <li>
                @if ($user->bio == '')
                -
                @else
                {{ $user->bio }}
                @endif
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  </section><!-- End Portfolio Details Section -->
  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">

    </div>
  </section>
</main>
@endsection