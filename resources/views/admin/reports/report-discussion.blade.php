@extends('admin.layout.main')

@section('title', 'Report Discussions Table')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Report Discussion Tables</h4>
                            @if (session('message'))
                            <div class="alert alert-success" role="alert">
                                {{ session('message') }}
                            </div>
                            @endif
                            <div class="my-3 col-12 col-sm-8 col-md-5">
                                <form action="" method="GET">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" name="keyword" placeholder="Keyword">
                                        <button class="input-group-text btn-sm btn-primary">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover table-striped">
                                    @if ($reportDiscussions->isEmpty())
                                    <div class="alert alert-danger">Pencarian {{ $keyword }} tidak ditemukan </div>
                                    @else
                                    <thead class="table table-dark">
                                        <tr>
                                            <th>No.</th>
                                            <th>Discussion</th>
                                            <th>Total Report</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($reportDiscussions as $data)
                                        <tr>
                                            <td>{{ $loop->iteration + $reportDiscussions->firstItem() - 1 }}</td>
                                            <td>{{ Str::limit($data->discussion->title, 50, '...') }}</td>
                                            <td>{{ $data->total_reports }}</td>
                                            <td>
                                                <a href="{{ route('report-discussion.detail', $data->discussion_id) }}" class="btn-sm text-decoration-none btn-info"><i class="fa-solid fa-circle-question"></i></a>
                                                | <a href="{{ route('diskusi.show', $data->discussion->slug) }}" class="btn-sm text-decoration-none btn-dark"><i class="fa-solid fa-circle-info"></i></a>
                                                | <form id="accept-form-{{ $data->discussion_id }}" action="{{ route('accept.report', $data->discussion_id) }}" data-status="Published" method="POST" style="display: inline;">
                                                    @csrf
                                                    @method('PUT')
                                                    <input type="hidden" name="discussion_id" value="{{ $data->discussion_id }}">
                                                    <button type="button" class="btn-sm text-decoration-none btn-success accept-button" data-report-id="{{ $data->discussion_id }}"><i class="fa-solid fa-check"></i></button>
                                                </form>
                                                | <form id="reject-form-{{ $data->discussion_id }}" action="{{ route('reject.report', $data->discussion_id) }}" data-status="Rejected" method="POST" style="display: inline;">
                                                    @csrf
                                                    @method('PUT')
                                                    <input type="hidden" name="discussion_id" value="{{ $data->discussion_id }}">
                                                    <button type="button" class="btn-sm text-decoration-none btn-danger reject-button" data-report-id="{{ $data->discussion_id }}"><i class="fa-solid fa-x"></i></button>
                                                </form>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                    @endif
                                </table>
                            </div>
                            {{ $reportDiscussions->withQueryString()->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@push('js')
<script>
    function publishConfirmation(reportId) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to accept this report?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Accept',
            cancelButtonText: 'Cancel',
            customClass: {
                icon: 'swal2-icon swal2-warning',
                confirmButton: 'swal2-button-confirm',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // Submit form
                document.querySelector(`#accept-form-${reportId}`).submit();
            }
        });
    }

    function rejectConfirmation(reportId) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to reject this report?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Reject',
            cancelButtonText: 'Cancel',
            customClass: {
                icon: 'swal2-icon swal2-warning',
                confirmButton: 'swal2-button-confirm',
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // Submit form
                document.querySelector(`#reject-form-${reportId}`).submit();
            }
        });
    }

    // Event listener untuk tombol konfirmasi publish
    const publishButtons = document.querySelectorAll('.accept-button');
    publishButtons.forEach((button) => {
        button.addEventListener('click', () => {
            publishConfirmation(button.dataset.reportId);
        });
    });

    // Event listener untuk tombol konfirmasi reject
    const rejectButtons = document.querySelectorAll('.reject-button');
    rejectButtons.forEach((button) => {
        button.addEventListener('click', () => {
            rejectConfirmation(button.dataset.reportId);
        });
    });
</script>
@endpush