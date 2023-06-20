@extends('layout.home')

@section('title', 'Diskusi')

@section('konten')

<main id="main">

  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
    </div>
  </section>

  {{-- Discussion-START --}}
  <div class="container" data-aos="fade-up">

    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            {{-- report button --}}

            @php
            $userReportDis = Auth::check() ? $discussion->report->where('user_id', Auth::user()->id)->first() : null;
            @endphp
            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" {{ $userReportDis ? 'disabled' : '' }}>
              <a><i class="{{ $userReportDis ? 'bi bi-check-circle' : 'bi bi-flag' }}"> Report</i></a>
            </button>
            @if (Auth::check())
            <form action="{{ route('report.discussion') }}" method="POST" class="dropdown-menu p-4">
              @csrf
              <div><i>Kenapa Anda Report Diskusi Ini</i></div>
              <div class="mb-3">
                <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
                <input type="hidden" name="discussion_id" value="{{ $discussion->id }}">
                <textarea placeholder="Alasan Report......" name="content" id="content" cols="30" rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            @if (session('message'))
            <div class="alert alert-success mt-3" role="alert">
              {{ session('message') }}
            </div>
            @endif
            @endif

            {{-- report button end --}}
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <div class="">
                  <div class="portfolio-description">
                    <h2>{{ $discussion->title }}</h2>
                    <p>
                      {!! $discussion->content !!}
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              @if ($discussion->user->image != null)
              <h3><img style="border-radius: 1000px;height:50px;width:50px" src="{{ asset('storage/photo/'.$discussion->user->image) }}" alt=""><a href="{{ route('profil.show', $discussion->user->username) }}"> {{ $discussion->user->name }}</a></h3>
              @else
              <h3><img style="border-radius: 1000px;height:50px;width:50px" src="/images/default-user.png" alt=""><a href="{{ route('profil.show', $discussion->user->username) }}"> {{ $discussion->user->name }}</a></h3>
              @endif
              <ul>
                <li>Kategori Pertanyaan: <a href="{{ route('kategori.detail', $discussion->category->slug) }}" class="btn btn-outline-primary">{{ $discussion->category->name }}</a> </li>
              </ul>
            </div>
            @php
            $userUpVote = Auth::check() ? $discussion->votes->where('user_id', Auth::user()->id)->where('type', 'Upvote')->first() : null;
            $userDownVote = Auth::check() ? $discussion->votes->where('user_id', Auth::user()->id)->where('type', 'Downvote')->first() : null;
            $voteCount = $discussion->votes->count();
            @endphp
            <div class="portfolio-description">
              <a class="btn {{ $userUpVote ? ' text-primary' : '' }}" href="{{ route('vote.up', $discussion->id) }}"><i class="fa-solid fa-arrow-up"></i>
                <p>Upvote.{{ $voteUp }}</p>
              </a>
              <a class="btn {{ $userDownVote ? ' text-primary' : '' }}" href="{{ route('vote.down', $discussion->id) }}"><i class="fa-solid fa-arrow-down"></i>
                <p>Downvote.{{ $voteDown }}</p>
              </a>
              <a href="#komen" class="btn"><i class="bi bi-chat"></i>
                <p>Komentar</p>
              </a>

            </div>

          </div>
        </div>
      </div>

  </div>
  </section>

  {{-- Discussion-END --}}

  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
    </div>
  </section>

  @if ($publishedResponses->count() > 0)
  @php
  function countReplies($comment) {
  $count = 0;
  foreach ($comment->replies as $reply) {
  $count += countReplies($reply);
  }
  return $count;
  }

  $totalComments = $publishedResponses->count();
  $totalReplies = 0;
  foreach ($publishedResponses as $comment) {
  $totalReplies += countReplies($comment);
  }
  $totalCommentsWithReplies = $totalComments + $totalReplies;
  @endphp
  <div class="container mt-4">
    <h3>{{ $totalCommentsWithReplies }} Response</h3>
    <hr>

    {{-- response --}}


    {{-- Role Doctor --}}
    {{-- response dengan reply --}}
    <div style="margin-left: 12px" class="container">
      @php
      $doctors = $discussion->comments->where('status', '!=', 'Deleted')->where('user.role_id', 3);
      $nonDoctors = $discussion->comments->where('status', '!=', 'Deleted')->where('user.role_id', '!=', 3);
      @endphp
      @foreach ($doctors->sortByDesc(function($comment) {
      return DB::table('vote_responses')
      ->where('response_id', $comment->id)
      ->where('type', 'Upvote')
      ->count();
      }) as $data)


      {{-- kalau user tidak memakai foto profil --}}
      @if ($data->user->image != null)
      <img style="border-radius: 1000px;height:25px;width:25px" src="{{ asset('storage/photo/'.$data->user->image) }}" alt="">
      @if ($data->user->specialist_id == 1)
      <a href="{{ route('profil.show', $data->user->username) }}"><b> {{ $data->user->name }}</b></a>
      @elseif($data->user->specialist_id == 2)
      <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }}</b></a>
      @else
      <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }} {{ $data->user->specialist->gelar }}</b></a>
      @endif
      <i>{{ $data->created_at->format('d M, Y') }}</i>
      <p class="btn btn-primary btn-sm bi bi-check">Doctor</p>
      @else
      <img style="border-radius: 1000px;height:25px;width:25px" src="/images/default-user.png" alt="">
      @if ($data->user->specialist_id == 1)
      <a href="{{ route('profil.show', $data->user->username) }}"><b> {{ $data->user->name }}</b></a>
      @elseif($data->user->specialist_id == 2)
      <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }}</b></a>
      @else
      <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }} {{ $data->user->specialist->gelar }}</b></a>
      @endif
      <i>{{ $data->created_at->format('d M, Y') }}</i>
      <p class="btn btn-primary btn-sm bi bi-check">Doctor</p>
      @endif

      @if (Auth::check())
      @if (Auth::user()->id == $data->user->id)
      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
        <a><i class="bi bi-trash"></i></a>
      </button>
      <form class="dropdown-menu p-4" action="{{ route('response.destroy', $data->id) }}" method="POST">
        @csrf
        @method('DELETE')
        <div><i>Apakah Anda Yakin Ingin Menghapus Ini?</i></div>
        <button type="submit" class="btn btn-danger mt-2">Hapus</button>
      </form>
      @endif
      @endif

      {{-- <p style="font-size: 20px" class="bi bi-person-circle"> <b>{{ $data->user->name }}</b> <i>3 mei 2022</i> </p> --}}
      <div class="mt-2">
        {{ $data->content }}
      </div>

      @php
      $voteUp = DB::table('vote_responses')
      ->where('response_id', $data->id)
      ->where('type', 'Upvote')
      ->count();
      $voteDown = DB::table('vote_responses')
      ->where('response_id', $data->id)
      ->where('type', 'Downvote')
      ->count();
      $userUpVote = Auth::check() ? $data->votes->where('user_id', Auth::user()->id)->where('type', 'Upvote')->first() : null;
      $userDownVote = Auth::check() ? $data->votes->where('user_id', Auth::user()->id)->where('type', 'Downvote')->first() : null;
      $voteCount = $data->votes->count();
      @endphp
      <a class="btn {{ $userUpVote ? ' text-primary' : '' }}" href="{{ route('vote-response.up', $data->id) }}"><i class="bi bi-arrow-up">{{ $voteUp }}</i></a>
      <a class="btn {{ $userDownVote ? ' text-primary' : '' }}" href="{{ route('vote-response.down', $data->id) }}"><i class="bi bi-arrow-down">{{ $voteDown }}</i></a>

      {{-- reply button --}}

      @if (Auth::check())
      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
        <a><i class="bi bi-chat"> Reply</i></a>
      </button>
      <form action="{{ route('response.store') }}" method="POST" class="dropdown-menu p-4">
        @csrf
        <div><i>Reply</i></div>
        <div class="mb-3">
          <input type="hidden" name="status" value="Published">
          <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
          <input type="hidden" name="discussion_id" value="{{ $discussion->id }}">
          <input type="hidden" name="parent_id" value="{{ $data->id }}">
          <textarea placeholder="Tambah Komentar......" name="content" id="content" cols="30" rows="5"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      @endif

      {{-- reply button end --}}


      {{-- report button --}}

      @if (Auth::check())
      @php
      $userReportRes = Auth::check() ? $data->report->where('user_id', Auth::user()->id)->first() : null;
      @endphp
      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" {{ $userReportRes ? 'disabled' : '' }}>
        <a><i class="{{ $userReportRes ? 'bi bi-check-circle' : 'bi bi-flag' }}"> Report</i></a>
      </button>
      <form action="{{ route('report.response') }}" method="POST" class="dropdown-menu p-4">
        @csrf
        <div><i>Kenapa Anda Report Response Ini</i></div>
        <div class="mb-3">
          <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
          <input type="hidden" name="response_id" value="{{ $data->id }}">
          <textarea placeholder="Alasan Report......" name="content" id="content" cols="30" rows="5"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      @endif

      {{-- report button end --}}


      <hr>


      @if ($data && count($data->replies) > 0)
      @foreach ($data->replies->where('status', '!=', 'Deleted')->sortByDesc(function($data) {
      return DB::table('vote_responses')
      ->where('response_id', $data->id)
      ->where('type', 'Upvote')
      ->count();
      }) as $data)
      {{-- reply --}}
      <i class="bi bi-arrow-return-right"> Reply to {{ $data->parent->user->name }}</i>
      <div style="margin-left: 15px" class="container">
        @if ($data->user->image != null)
        <img style="border-radius: 1000px;height:25px;width:25px" src="{{ asset('storage/photo/'.$data->user->image) }}" alt="">
        @if ($data->user->specialist_id == 1)
        <a href="{{ route('profil.show', $data->user->username) }}"><b> {{ $data->user->name }}</b></a>
        @elseif($data->user->specialist_id == 2)
        <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }}</b></a>
        @else
        <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }} {{ $data->user->specialist->gelar }}</b></a>
        @endif
        <i> {{ $data->created_at->format('d M, Y') }}</i>
        @if ($data->user->role_id == 3)
        <p class="btn btn-primary btn-sm bi bi-check">Doctor</p>
        @endif
        @else
        <img style="border-radius: 1000px;height:25px;width:25px" src="/images/default-user.png" alt="">
        @if ($data->user->specialist_id == 1)
        <a href="{{ route('profil.show', $data->user->username) }}"><b> {{ $data->user->name }}</b></a>
        @elseif($data->user->specialist_id == 2)
        <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }}</b></a>
        @else
        <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }} {{ $data->user->specialist->gelar }}</b></a>
        @endif
        <i>{{ $data->created_at->format('d M, Y') }}</i>
        @if ($data->user->role_id == 3)
        <p class="btn btn-primary btn-sm bi bi-check">Doctor</p>
        @endif
        @endif

        @if (Auth::check())
        @if (Auth::user()->id == $data->user->id)
        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
          <a><i class="bi bi-trash"></i></a>
        </button>
        <form class="dropdown-menu p-4" action="{{ route('response.destroy', $data->id) }}" method="POST">
          @csrf
          @method('DELETE')
          <div><i>Apakah Anda Yakin Ingin Menghapus Ini?</i></div>
          <button type="submit" class="btn btn-danger mt-2">Hapus</button>
        </form>
        @endif
        @endif

        <div class="mt-2">
          {{ $data->content }}
        </div>

        @php
        $voteUp = DB::table('vote_responses')
        ->where('response_id', $data->id)
        ->where('type', 'Upvote')
        ->count();
        $voteDown = DB::table('vote_responses')
        ->where('response_id', $data->id)
        ->where('type', 'Downvote')
        ->count();
        $userUpVote = Auth::check() ? $data->votes->where('user_id', Auth::user()->id)->where('type', 'Upvote')->first() : null;
        $userDownVote = Auth::check() ? $data->votes->where('user_id', Auth::user()->id)->where('type', 'Downvote')->first() : null;
        $voteCount = $data->votes->count();
        @endphp
        <a class="btn {{ $userUpVote ? ' text-primary' : '' }}" href="{{ route('vote-response.up', $data->id) }}"><i class="bi bi-arrow-up">{{ $voteUp }}</i></a>
        <a class="btn {{ $userDownVote ? ' text-primary' : '' }}" href="{{ route('vote-response.down', $data->id) }}"><i class="bi bi-arrow-down">{{ $voteDown }}</i></a>
        {{-- report button --}}

        @if (Auth::check())
        @php
        $userReportRes = Auth::check() ? $data->report->where('user_id', Auth::user()->id)->first() : null;
        @endphp
        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" {{ $userReportRes ? 'disabled' : '' }}>
          <a><i class="{{ $userReportRes ? 'bi bi-check-circle' : 'bi bi-flag' }}"> Report</i></a>
        </button>
        <form action="{{ route('report.response') }}" method="POST" class="dropdown-menu p-4">
          @csrf
          <div><i>Kenapa Anda Report Response Ini</i></div>
          <div class="mb-3">
            <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
            <input type="hidden" name="response_id" value="{{ $data->id }}">
            <textarea placeholder="Alasan Report......" name="content" id="content" cols="30" rows="5"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        @endif

        {{-- report button end --}}
        <hr>
      </div>
      {{-- reply end --}}

      @endforeach
      @endif

      @endforeach
    </div>
    {{-- response dengan reply end --}}

    {{-- End Role Doctor --}}

    {{-- Role Biasa --}}
    {{-- response dengan reply --}}
    <div style="margin-left: 12px" class="container">
      @php
      $doctors = $discussion->comments->where('status', '!=', 'Deleted')->where('user.role_id', 3);
      $nonDoctors = $discussion->comments->where('status', '!=', 'Deleted')->where('user.role_id', '!=', 3);
      @endphp
      @foreach ($nonDoctors->sortByDesc(function($comment) {
      return DB::table('vote_responses')
      ->where('response_id', $comment->id)
      ->where('type', 'Upvote')
      ->count();
      }) as $data)

      {{-- kalau user tidak memakai foto profil --}}
      @if ($data->user->image != null)
      <img style="border-radius: 1000px;height:25px;width:25px" src="{{ asset('storage/photo/'.$data->user->image) }}" alt="">
      <a href="{{ route('profil.show', $data->user->username) }}"><b> {{ $data->user->name }}</b></a>
      <i>{{ $data->created_at->format('d M, Y') }}</i>
      @else
      <img style="border-radius: 1000px;height:25px;width:25px" src="/images/default-user.png" alt="">
      <a href="{{ route('profil.show', $data->user->username) }}"><b> {{ $data->user->name }}</b></a>
      <i>{{ $data->created_at->format('d M, Y') }}</i>
      @endif

      @if (Auth::check())
      @if (Auth::user()->id == $data->user->id)
      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
        <a><i class="bi bi-trash"></i></a>
      </button>
      <form class="dropdown-menu p-4" action="{{ route('response.destroy', $data->id) }}" method="POST">
        @csrf
        @method('DELETE')
        <div><i>Apakah Anda Yakin Ingin Menghapus Ini?</i></div>
        <button type="submit" class="btn btn-danger mt-2">Hapus</button>
      </form>
      @endif
      @endif

      {{-- <p style="font-size: 20px" class="bi bi-person-circle"> <b>{{ $data->user->name }}</b> <i>3 mei 2022</i> </p> --}}
      <div class="mt-2">
        {{ $data->content }}
      </div>

      @php
      $voteUp = DB::table('vote_responses')
      ->where('response_id', $data->id)
      ->where('type', 'Upvote')
      ->count();
      $voteDown = DB::table('vote_responses')
      ->where('response_id', $data->id)
      ->where('type', 'Downvote')
      ->count();
      $userUpVote = Auth::check() ? $data->votes->where('user_id', Auth::user()->id)->where('type', 'Upvote')->first() : null;
      $userDownVote = Auth::check() ? $data->votes->where('user_id', Auth::user()->id)->where('type', 'Downvote')->first() : null;
      $voteCount = $data->votes->count();
      @endphp
      <a class="btn {{ $userUpVote ? ' text-primary' : '' }}" href="{{ route('vote-response.up', $data->id) }}"><i class="bi bi-arrow-up">{{ $voteUp }}</i></a>
      <a class="btn {{ $userDownVote ? ' text-primary' : '' }}" href="{{ route('vote-response.down', $data->id) }}"><i class="bi bi-arrow-down">{{ $voteDown }}</i></a>

      {{-- reply button --}}

      @if (Auth::check())
      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
        <a><i class="bi bi-chat"> Reply</i></a>
      </button>
      <form action="{{ route('response.store') }}" method="POST" class="dropdown-menu p-4">
        @csrf
        <div><i>Reply</i></div>
        <div class="mb-3">
          <input type="hidden" name="status" value="Published">
          <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
          <input type="hidden" name="discussion_id" value="{{ $discussion->id }}">
          <input type="hidden" name="parent_id" value="{{ $data->id }}">
          <textarea placeholder="Tambah Komentar......" name="content" id="content" cols="30" rows="5"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      @endif

      {{-- reply button end --}}


      {{-- report button --}}

      @if (Auth::check())
      @php
      $userReportRes = Auth::check() ? $data->report->where('user_id', Auth::user()->id)->first() : null;
      @endphp
      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" {{ $userReportRes ? 'disabled' : '' }}>
        <a><i class="{{ $userReportRes ? 'bi bi-check-circle' : 'bi bi-flag' }}"> Report</i></a>
      </button>
      <form action="{{ route('report.response') }}" method="POST" class="dropdown-menu p-4">
        @csrf
        <div><i>Kenapa Anda Report Response Ini</i></div>
        <div class="mb-3">
          <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
          <input type="hidden" name="response_id" value="{{ $data->id }}">
          <textarea placeholder="Alasan Report......" name="content" id="content" cols="30" rows="5"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      @endif

      {{-- report button end --}}

      <hr>


      @if ($data && count($data->replies) > 0)
      @foreach ($data->replies->where('status', '!=', 'Deleted')->sortByDesc(function($data) {
      return DB::table('vote_responses')
      ->where('response_id', $data->id)
      ->where('type', 'Upvote')
      ->count();
      }) as $data)
      {{-- reply --}}
      <i class="bi bi-arrow-return-right"> Reply to {{ $data->parent->user->name }}</i>
      <div style="margin-left: 15px" class="container">
        @if ($data->user->image != null)
        <img style="border-radius: 1000px;height:25px;width:25px" src="{{ asset('storage/photo/'.$data->user->image) }}" alt="">
        @if ($data->user->specialist_id == 1)
        <a href="{{ route('profil.show', $data->user->username) }}"><b> {{ $data->user->name }}</b></a>
        @elseif($data->user->specialist_id == 2)
        <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }}</b></a>
        @else
        <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }} {{ $data->user->specialist->gelar }}</b></a>
        @endif
        <i> {{ $data->created_at->format('d M, Y') }} </i>
        @if ($data->user->role_id == 3)
        <p class="btn btn-primary btn-sm bi bi-check">Doctor</p>
        @endif
        @else
        <img style="border-radius: 1000px;height:25px;width:25px" src="/images/default-user.png" alt="">
        @if ($data->user->specialist_id == 1)
        <a href="{{ route('profil.show', $data->user->username) }}"><b> {{ $data->user->name }}</b></a>
        @elseif($data->user->specialist_id == 2)
        <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }}</b></a>
        @else
        <a href="{{ route('profil.show', $data->user->username) }}"><b> dr.{{ $data->user->name }} {{ $data->user->specialist->gelar }}</b></a>
        @endif
        <i>{{ $data->created_at->format('d M, Y') }}</i>
        @if ($data->user->role_id == 3)
        <p class="btn btn-primary btn-sm bi bi-check">Doctor</p>
        @endif
        @endif

        @if (Auth::check())
        @if (Auth::user()->id == $data->user->id)
        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
          <a><i class="bi bi-trash"></i></a>
        </button>
        <form class="dropdown-menu p-4" action="{{ route('response.destroy', $data->id) }}" method="POST">
          @csrf
          @method('DELETE')
          <div><i>Apakah Anda Yakin Ingin Menghapus Ini?</i></div>
          <button type="submit" class="btn btn-danger mt-2">Hapus</button>
        </form>
        @endif
        @endif

        <div class="mt-2">
          {{ $data->content }}
        </div>

        @php
        $voteUp = DB::table('vote_responses')
        ->where('response_id', $data->id)
        ->where('type', 'Upvote')
        ->count();
        $voteDown = DB::table('vote_responses')
        ->where('response_id', $data->id)
        ->where('type', 'Downvote')
        ->count();
        $userUpVote = Auth::check() ? $data->votes->where('user_id', Auth::user()->id)->where('type', 'Upvote')->first() : null;
        $userDownVote = Auth::check() ? $data->votes->where('user_id', Auth::user()->id)->where('type', 'Downvote')->first() : null;
        $voteCount = $data->votes->count();
        @endphp
        <a class="btn {{ $userUpVote ? ' text-primary' : '' }}" href="{{ route('vote-response.up', $data->id) }}"><i class="bi bi-arrow-up">{{ $voteUp }}</i></a>
        <a class="btn {{ $userDownVote ? ' text-primary' : '' }}" href="{{ route('vote-response.down', $data->id) }}"><i class="bi bi-arrow-down">{{ $voteDown }}</i></a>
        {{-- report button --}}

        @if (Auth::check())
        @php
        $userReportRes = Auth::check() ? $data->report->where('user_id', Auth::user()->id)->first() : null;
        @endphp
        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" {{ $userReportRes ? 'disabled' : '' }}>
          <a><i class="{{ $userReportRes ? 'bi bi-check-circle' : 'bi bi-flag' }}"> Report</i></a>
        </button>
        <form action="{{ route('report.response') }}" method="POST" class="dropdown-menu p-4">
          @csrf
          <div><i>Kenapa Anda Report Response Ini</i></div>
          <div class="mb-3">
            <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
            <input type="hidden" name="response_id" value="{{ $data->id }}">
            <textarea placeholder="Alasan Report......" name="content" id="content" cols="30" rows="5"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        @endif

        {{-- report button end --}}
        <hr>
      </div>
      {{-- reply end --}}

      @endforeach
      @endif

      @endforeach
    </div>
    {{-- response dengan reply end --}}
    {{-- End Role Biasa --}}

    @else
    <div class="container mt-4">
      <h3>0 Response</h3>
      <hr>
      @endif



    </div>

    <span id="komen"></span>
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
      </div>
    </section>


    {{-- komentar --}}
    @if (Auth::check())
    <div class="row mt-4 container">
      <div class="col-1 d-flex justify-content-start">
        @if ($discussion->user->image != null)
        <img style="border-radius: 1000px;height:50px;width:50px" src="{{ asset('storage/photo/'.Auth::user()->image) }}" alt="">
        @else
        <img style="border-radius: 1000px;height:50px;width:50px" src="/images/default-user.png" alt="">
        @endif
      </div>
      <div class="col-11 d-flex justify-content-end">
        <div class="col form-group">
          <form action="{{ route('response.store') }}" method="POST">
            @csrf
            <textarea placeholder="Tambah Komentar.........." class="form-control" name="content" id="content" cols="20" rows="4"></textarea>

            <input type="hidden" name="status" value="Published">
            <input type="hidden" name="user_id" value="{{ Auth::user()->id }}">
            <input type="hidden" name="discussion_id" value="{{ $discussion->id }}">
            <div class="row mt-3">
              <div class="col-11 d-flex justify-content-start">
                <button class="btn btn-primary">Submit</button>
              </div>
              <div class="col-1">

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    @else
    <div class="container">
      <hr>
      <img style="border-radius: 1000px;height:50px;width:50px" src="/images/default-user.png" alt="">
      <a href="/login">Login To make A Comment !!!</a>
      <hr>
    </div>
    @endif

  </div>
  {{-- komentar end --}}


  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
    </div>
  </section>

</main>
@endsection