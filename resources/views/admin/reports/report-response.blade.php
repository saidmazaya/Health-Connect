@extends('admin.layout.main')

@section('title', 'Report Responses Table')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Report Response Tables</h4>
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
                                    @if ($reportResponse->isEmpty())
                                    <div class="alert alert-danger">Pencarian {{ $keyword }} tidak ditemukan </div>
                                    @else
                                    <thead class="table table-dark">
                                        <tr>
                                            <th>No.</th>
                                            <th>Response</th>
                                            <th>Total Report</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($reportResponse as $data)
                                        <tr>
                                            <td>{{ $loop->iteration + $reportResponse->firstItem() - 1 }}</td>
                                            <td>{{ Str::limit($data->response->content, 50, '...') }}</td>
                                            <td>{{ $data->total_reports }}</td>
                                            <td>
                                                <a href="{{ route('report-response.detail', $data->response_id) }}" class="btn-sm text-decoration-none btn-info"><i class="fa-solid fa-circle-question"></i></a>
                                                | <a href="#" class="btn-sm text-decoration-none btn-dark"><i class="fa-solid fa-circle-info"></i></a>
                                                | <form id="accept-form-{{ $data->response_id }}" action="{{ route('response-accept.report', $data->response_id) }}" data-status="Published" method="POST" style="display: inline;">
                                                    @csrf
                                                    @method('PUT')
                                                    <input type="hidden" name="response_id" value="{{ $data->response_id }}">
                                                    <button type="button" class="btn-sm text-decoration-none btn-success accept-button" data-report-id="{{ $data->response_id }}"><i class="fa-solid fa-check"></i></button>
                                                </form>
                                                | <form id="reject-form-{{ $data->response_id }}" action="{{ route('response-reject.report', $data->response_id) }}" data-status="Rejected" method="POST" style="display: inline;">
                                                    @csrf
                                                    @method('PUT')
                                                    <input type="hidden" name="response_id" value="{{ $data->response_id }}">
                                                    <button type="button" class="btn-sm text-decoration-none btn-danger reject-button" data-report-id="{{ $data->response_id }}"><i class="fa-solid fa-x"></i></button>
                                                </form>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                    @endif
                                </table>
                            </div>
                            {{ $reportResponse->withQueryString()->links() }}
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