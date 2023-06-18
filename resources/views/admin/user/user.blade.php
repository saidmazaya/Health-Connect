@extends('admin.layout.main')

@section('title', 'User Accounts Table')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">User Account Tables</h4>
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
                                                <a href="#" class="btn-sm text-decoration-none btn-info"><i class="fa-solid fa-circle-info"></i></a>
                                                | <a href="{{ route('user.track', $data->username) }}" class="btn-sm text-decoration-none btn-primary"><i class="fa-solid fa-shoe-prints"></i></i></a>
                                                | <button type="button" class="btn-sm text-decoration-none btn-success accept-button" data-doctor-id="{{ $data->id }}" data-bs-toggle="modal" data-bs-target="#exampleModal-{{ $data->id }}">
                                                    <i class="fa-solid fa-user-doctor"></i>
                                                </button>

                                                <!-- Modal -->
                                                <div class="modal fade" id="exampleModal-{{ $data->id }}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Update Role User Menjadi Dokter</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <!-- Isi modal -->
                                                                <form id="accept-form-{{ $data->id }}" action="{{ route('user.accept-doctor', $data->id) }}" method="POST" style="display: inline;">
                                                                    @csrf
                                                                    @method('PUT')
                                                                    <input type="hidden" name="id" value="{{ $data->id }}">
                                                                    <label for="specialist" class="form-label">Spesialis</label>
                                                                    <select name="specialist_id" id="specialist-{{ $data->id }}" class="form-select" required>
                                                                        <option value="">Select One</option>
                                                                        @foreach ($specialist as $item)
                                                                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                                                                        @endforeach
                                                                    </select>
                                                                </form>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" class="btn btn-primary" onclick="submitForm({{ $data->id }})">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

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
    function submitForm(doctorId) {
        // Mendapatkan referensi ke elemen formulir dan select
        const form = document.querySelector(`#accept-form-${doctorId}`);
        const select = document.querySelector(`#specialist-${doctorId}`);
        
        // Validasi select
        if (select.value === '') {
            select.classList.add('is-invalid');
            return;
        }
        
        // Submit formulir
        form.submit();
    }
</script>
@endpush
{{-- @push('js')
<script>
    function publishConfirmation(doctorId) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to accept this user proposal to be a doctor?',
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
@endpush --}}

{{-- | <form id="accept-form-{{ $data->id }}" action="{{ route('user.accept-doctor', $data->id) }}" data-status="Published" method="POST" style="display: inline;">
    @csrf
    @method('PUT')
    <input type="hidden" name="id" value="{{ $data->id }}">
    <button type="button" class="btn-sm text-decoration-none btn-success accept-button" data-doctor-id="{{ $data->id }}"><i class="fa-solid fa-user-doctor"></i></button>
</form> --}}
<!-- Tombol untuk membuka modal -->