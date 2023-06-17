@extends('admin.layout.main')

@section('title', 'Admin Dashboard')

@section('content')
<!-- partial -->
<div class="container-fluid page-body-wrapper">
  <!-- partial:partials/_settings-panel.html -->
  @include('admin.components.sidebar')

  <!-- partial -->
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="row">
        <div class="col-sm-12">
          <div class="home-tab">
            <div class="d-sm-flex align-items-center justify-content-between border-bottom">
            </div>
            <div class="tab-content tab-content-basic">
              <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="statistics-details d-flex align-items-center justify-content-between">
                        @php
                        $articleCount = DB::table('articles')->count();
                        $discussionCount = DB::table('discussions')->count();
                        $userCount = DB::table('users')
                        ->where('role_id', '!=', 1)
                        ->count();
                        $doctorCount = DB::table('users')
                        ->where('role_id', 3)
                        ->count();
                        $categoryCount = DB::table('categories')->count();
                        $reportCount = DB::table('report_discussions')->count() + DB::table('report_responses')->count()
                        @endphp
                      <div>
                        <p class="statistics-title">Total User</p>
                        <h3 class="rate-percentage">{{ $userCount }}</h3>
                      </div>
                      <div>
                        <p class="statistics-title">Total Doctor</p>
                        <h3 class="rate-percentage">{{ $doctorCount }}</h3>
                      </div>
                      <div>
                        <p class="statistics-title">Total Article</p>
                        <h3 class="rate-percentage">{{ $articleCount }}</h3>
                      </div>
                      <div>
                        <p class="statistics-title">Total Discussion</p>
                        <h3 class="rate-percentage">{{ $discussionCount }}</h3>
                      </div>
                      <div class="d-none d-md-block">
                        <p class="statistics-title">Total Category</p>
                        <h3 class="rate-percentage">{{ $categoryCount }}</h3>
                      </div>
                      <div class="d-none d-md-block">
                        <p class="statistics-title">Total Report</p>
                        <h3 class="rate-percentage">{{ $reportCount }}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- content-wrapper ends -->
    <!-- partial:partials/_footer.html -->
    <footer class="footer">
      <div class="d-sm-flex justify-content-center justify-content-sm-between">
        <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Health Connect <a href="/" target="_blank">Discuss About Health</a> from Health Connect.</span>
        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2023. All rights reserved.</span>
      </div>
    </footer>
    <!-- partial -->
  </div>
  <!-- main-panel ends -->
</div>
<!-- page-body-wrapper ends -->
@endsection