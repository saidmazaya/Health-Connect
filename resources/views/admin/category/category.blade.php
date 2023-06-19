@extends('admin.layout.main')

@section('title', 'Categories Table')

@section('content')
<div class="container-fluid page-body-wrapper">
    @include('admin.components.sidebar')
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Category Tables</h4>
                            <div class="my-3">
                                <a href="{{ route('category.create') }}" class="btn btn-outline-info">Add Data</a>
                            </div>
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
                                    @if ($category->isEmpty())
                                    <div class="alert alert-danger">Pencarian {{ $keyword }} tidak ditemukan </div>
                                    @else
                                    <thead class="table table-dark">
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Parent</th>
                                            <th style="width: 25%">Jumlah Diskusi</th>
                                            <th style="width: 25%">Jumlah Artikel</th>
                                            <th style="width: 25%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($category as $data)
                                        <tr>
                                            <td>{{ $loop->iteration + $category->firstItem() - 1 }}</td>
                                            <td>{{ $data->name }}</td>
                                            <td>{{ $data->parent->name }}</td>
                                            @php
                                            $categoryUseDiscussCount = DB::table('discussions')->where('category_id', $data->id)->count();
                                            $categoryUseCount = DB::table('articles')->where('category_id', $data->id)->count();
                                            @endphp
                                            <td>{{ $categoryUseDiscussCount }}</td>
                                            <td>{{ $categoryUseCount }}</td>
                                            <td>
                                                <a href="{{ route('kategori.detail', $data->slug) }}" class="btn-sm text-decoration-none btn-info">Detail</a>
                                                | <a href="{{ route('category.edit', $data->slug) }}" class="btn-sm text-decoration-none btn-primary">Edit</a>
                                                | <form class="d-inline" action="{{ route('category.destroy', $data->id) }}" method="POST" id="deleteForm{{ $data->id }}" data-category-id="{{ $data->id }}" data-related-articles="{{ $categoryUseCount }}" data-related-discussion="{{ $categoryUseDiscussCount }}">
                                                    @csrf
                                                    @method('delete')
                                                    <button type="button" class="btn-sm btn-danger delete-button">Delete</button>
                                                </form>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                    @endif
                                </table>
                            </div>
                            {{ $category->withQueryString()->links() }}
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
//     // Event listener for the delete button
// const deleteButtons = document.querySelectorAll('.delete-button');

// deleteButtons.forEach((button) => {
//     button.addEventListener('click', function () {
//         const form = this.parentNode;
//         const categoryId = form.getAttribute('data-category-id');
//         const relatedArticles = parseInt(form.getAttribute('data-related-articles'));

//         let confirmationMessage = 'Apakah Anda yakin ingin menghapus category ini?';

//         if (relatedArticles > 0) {
//             confirmationMessage += ' Ada artikel yang menggunakan category ini.';
//         }

//         Swal.fire({
//             title: 'Confirmation',
//             text: confirmationMessage,
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Ya, Hapus',
//             cancelButtonText: 'Batal',
//             customClass: {
//                 icon: '.swal2-icon.swal2-warning', // Nama kelas CSS yang Anda tentukan
//         },
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 form.submit();
//             }
//         });
//     });
// });

// Event listener for the delete button
const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const form = this.parentNode;
        const tagId = form.getAttribute('data-category-id');
        const relatedArticles = parseInt(form.getAttribute('data-related-articles'));
        const relatedDiscussion = parseInt(form.getAttribute('data-related-discussion'));

        if (relatedArticles > 0 || relatedDiscussion > 0) {
            Swal.fire({
                title: 'Peringatan',
                text: 'Category ini tidak dapat dihapus karena ada diskusi atau artikel yang menggunakannya.',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'Konfirmasi',
                text: 'Apakah Anda yakin ingin menghapus category ini?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ya, Hapus',
                cancelButtonText: 'Batal',
                customClass: {
                    icon: '.swal2-icon.swal2-warning',
                    confirmButton: 'swal2-button-confirm', // Nama kelas CSS yang Anda tentukan
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    form.submit();
                }
            });
        }
    });
});
</script>
@endpush