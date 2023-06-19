<header id="header" class="fixed-top">
  <div class="container d-flex align-items-center justify-content-between">

    <h1 class="logo"><a href="/">Health Connect</a></h1>
    <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
    <form action="{{ route('search') }}" method="GET">
      <input type="text" style="border-radius: 4px; width: 6cm; padding: 4px" name="keyword" placeholder="Search...">
      <button type="submit" style="padding: 4px;">
        <i class="bi bi-search"></i>
      </button>
    </form>
    <nav id="navbar" class="navbar">
      <ul>
        @if (Auth::check())
        <li><a class="nav-link scrollto" href="/">Home</a></li>
        <li><a class="nav-link scrollto" href="/forum">Forum Diskusi</a></li>
        <li><a class="nav-link scrollto" href="/informasi">Informasi</a></li>
        <li><a class="nav-link scrollto o" href="/about">About</a></li>
        <li><a class="nav-link scrollto o" href="{{ route('diskusi.create') }}">Create Discussion</a></li>
        <li class="dropdown"><a href="#"><span><i class="bi bi-person-circle" style="font-size: 20px"></i></span> <i class="bi bi-chevron-down"></i></a>
          <ul>
            <li><a href="{{ route('profil.show', Auth::user()->username) }}">{{ Auth::user()->name }}</a></li>
            <li><a href="/kategori">Kategori</a></li>
            <li><a href="/dokter">Spesialis Dokter</a></li>
            <li><a href="#">Drop Down 3</a></li>
            @if (Auth::user()->role_id == 1)
            <li><a href="{{ route('dashboard_admin') }}">Dashboard</a></li>
            @endif
            <li><a href="/signout">Sign Out</a></li>
          </ul>
        </li>
        @else
        <li><a class="nav-link scrollto" href="/">Home</a></li>
        <li><a class="nav-link scrollto" href="/forum">Forum Diskusi</a></li>
        <li><a class="nav-link scrollto" href="/informasi">Informasi</a></li>
        <li><a class="nav-link scrollto o" href="/about">About</a></li>
        <li><a class="getstarted scrollto" href="/login">Login</a></li>
        @endif
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>
  </div>
</header>