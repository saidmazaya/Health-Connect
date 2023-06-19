@extends('layout.home')

@section('title', 'Detail Kategori')

@section('konten')

<main id="main">

    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
            <i>{{ $discussion->total() }} Diskusi Ditemukan</i>
        </div>
    </section>

    <div class="container mt-4">

        <hr>

        {{-- diskusi --}}

        @foreach ($discussion as $data)
        <div style="margin-left: 12px" class="container">
            <p style="font-size: 20px" class="bi bi-person-circle"> <a href="#"><b>{{ $data->user->name }}</b></a> <i>{{ $data->created_at->format('d M, Y') }}</i> </p>
            <div>
                <b>{{ $data->title }}</b>
            </div>
            <div>
                {{ Str::limit(strip_tags($data->content), 150, '...') }} <a href="{{ route('diskusi.show', $data->slug) }}">Read More...</a>
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
            <a class="btn"><i class="bi bi-arrow-up">{{ $voteUp }}</i></a>
            <a class="btn"><i class="bi bi-arrow-down">{{ $voteDown }}</i></a>
            <a class="btn"><i class="bi bi-heart-pulse"> {{ $data->category->name }}</i></a>
            <hr>
        </div>
        @endforeach
        {{ $discussion->links() }}

    </div>

    {{-- diskusi end --}}


    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
            <i>{{ $article->total() }} Artikel Ditemukan</i>
        </div>
    </section>

    <div class="container mt-4">

        <hr>

        {{-- Artikel --}}

        @foreach ($article as $data)
        <div id="artikel" style="margin-left: 12px" class="container">
            <p style="font-size: 20px" class="bi bi-person-circle"> <b>Admin HTC</b> <i>{{ $data->created_at->format('d M, Y') }}</i> </p>
            <div>
                <b>{{ $data->title }}</b>
            </div>
            <div>
                {{ Str::limit(strip_tags($data->content), 150, '...') }} <a href="#">Read More...</a>
            </div>
            <a class="btn"><i class="bi bi-heart-pulse"> {{ $data->category->name }}</i></a>
            <hr>

        </div>
        @endforeach
        {{ $article->links() }}
    </div>
    {{-- Artikel end --}}

    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
        </div>
    </section>

</main>
@endsection