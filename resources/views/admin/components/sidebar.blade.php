<!-- partial:partials/_sidebar.html -->
<nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link" href="/dashboard">
                <i class="menu-icon fa-solid fa-table-cells-large"></i>
                <span class="menu-title">Dashboard</span>
            </a>
        </li>
        <li class="nav-item nav-category">Data Management</li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.discussion') }}" aria-expanded="false" aria-controls="ui-basic">
                <i class="menu-icon fa-solid fa-heart-pulse"></i>
                <span class="menu-title">Discussion</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.response') }}" aria-expanded="false" aria-controls="ui-basic">
                <i class="menu-icon fa-solid fa-reply"></i>
                <span class="menu-title">Response</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#comment-basic" aria-expanded="false" aria-controls="comment-basic">
                <i class="menu-icon fa-solid fa-comment-slash"></i>
                <span class="menu-title">Reports</span>
                <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="comment-basic">
                <ul class="nav flex-column sub-menu">
                    <li class="nav-item"> <a class="nav-link" href="{{ route('report-discussion.index') }}">Report Discussion</a></li>
                    <li class="nav-item"> <a class="nav-link" href="{{ route('report-response.index') }}">Report Response</a></li>
                </ul>
            </div>
        </li>
        <li class="nav-item nav-category">Forms and Datas</li>
        <li class="nav-item">
            <a class="nav-link" href="#" aria-expanded="false" aria-controls="form-elements">
                <i class="menu-icon fa-solid fa-folder-plus"></i>
                <span class="menu-title">Articles</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" aria-expanded="false" aria-controls="charts">
                <i class="menu-icon fa-solid fa-tag"></i>
                <span class="menu-title">Category</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" aria-expanded="false" aria-controls="tables">
                <i class="menu-icon fa-solid fa-user"></i>
                <span class="menu-title">User Table</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" aria-expanded="false" aria-controls="tables">
                <i class="menu-icon fa-solid fa-user-doctor"></i>
                <span class="menu-title">Doctor Table</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" aria-expanded="false" aria-controls="tables">
                <i class="menu-icon fa-solid fa-stethoscope"></i>
                <span class="menu-title">Specialist</span>
            </a>
        </li>
    </ul>
</nav>