@extends('admin.layout.main')

@section('title', 'Doctor Accounts Table')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Doctor Account Tables</h4>
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
                                <table class="table table-striped table-hover">
                                    @if ($user->isEmpty())
                                    <div class="alert alert-danger">Pencarian {{ $keyword }} tidak ditemukan </div>
                                    @else
                                    <thead class="table table-dark">
                                        <tr>
                                            <th>No.</th>
                                            <th>Username</th>
                                            <th>Name</th>
                                            <th>Spesialis</th>
                                            <th>Email</th>
                                            <th>Jumlah Diskusi</th>
                                            <th>Jumlah Response</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($user as $data)
                                        <tr>
                                            <td>{{ $loop->iteration + $user->firstItem() - 1 }}</td>
                                            <td>{{ $data->username }}</td>
                                            <td>{{ $data->name }}</td>
                                            <td>{{ $data->specialist->gelar }}</td>
                                            <td>{{ $data->email }}</td>
                                            <td>
                                                @php
                                                $discussionCount = DB::table('discussions')->where('author_id', $data->id)->count();
                                                @endphp
                                                {{ $discussionCount }}
                                            </td>
                                            <td>
                                                @php
                                                $responseCount = DB::table('responses')->where('user_id', $data->id)->count();
                                                @endphp
                                                {{ $responseCount }}
                                            </td>
                                            <td>
                                                <a href="{{ route('profil.show', $data->username) }}" class="btn-sm text-decoration-none btn-info"><i class="fa-solid fa-circle-info"></i></a>
                                                | <a href="{{ route('doctor.track', $data->username) }}" class="btn-sm text-decoration-none btn-primary"><i class="fa-solid fa-shoe-prints"></i></i></a>
                                                | <form id="accept-form-{{ $data->id }}" action="{{ route('doctor.demote', $data->id) }}" data-status="Published" method="POST" style="display: inline;">
                                                    @csrf
                                                    @method('PUT')
                                                    <input type="hidden" name="id" value="{{ $data->id }}">
                                                    <button type="button" class="btn-sm text-decoration-none btn-danger accept-button" data-doctor-id="{{ $data->id }}"><i class="fa-solid fa-user-minus"></i></button>
                                                </form>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                    @endif
                                </table>
                            </div>
                            {{ $user->withQueryString()->links() }}
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
    function publishConfirmation(doctorId) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to demote this doctor to user?',
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
                document.querySelector(`#accept-form-${doctorId}`).submit();
            }
        });
    }

        // Event listener untuk tombol konfirmasi publish
        const publishButtons = document.querySelectorAll('.accept-button');
    publishButtons.forEach((button) => {
        button.addEventListener('click', () => {
            publishConfirmation(button.dataset.doctorId);
        });
    });

</script>
@endpush