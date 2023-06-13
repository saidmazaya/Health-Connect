<!-- ======= Header ======= -->
<header id="header" class="fixed-top @yield('cssnav') bg-primary">
    <div class="container d-flex align-items-center justify-content-between">

        <h1 class="logo">
            <a href="/">
                <img src="/images/premium-mini.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
                Health-Connect
            </a>
        </h1>

        <nav id="navbar" class="navbar">
            <ul>
                <li><a class="nav-link scrollto" href="/forum">Forum Diskusi</a></li>
                <li><a class="nav-link scrollto" href="/ourstory">Informasi</a></li>
                <li><a class="nav-link scrollto" href="{{ route('signin') }}">Sign In</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->
    </div>
</header><!-- End Header -->