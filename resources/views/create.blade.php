@extends('layout.home')

@section('title', 'Diskusi')

@section('konten')
    
<section class="breadcrumbs">
    <div class="container">

    </div>
  </section>

<div class="container-fluid page-body-wrapper mt-4">
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Buat Diskusi</h4>
                            <form action="" method="POST" enctype="multipart/form-data">
                                <div class="form-group mb-3">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" id="title" name="title">
                                    
                                </div>
                                
                                <div class="form-group mb-3">
                                    <label for="content">Content</label>
                                    <textarea name="content" id="content" cols="30" rows="10" class="form-control"></textarea>
                                    
                                </div>
                                
                                <input type="hidden" name="author_id" value="">
                                <div class="form-group mb-3">
                                    <label for="category">Category</label>
                                    <select name="category_id" id="category" class="form-select" required>
                                        <option value="">Select One</option>
                                        
                                    </select>
                                    
                                </div>
                                <button type="submit" class="btn btn-primary me-2">Publish</button>
                                <a href="" class="btn btn-outline-secondary">Cancel</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="breadcrumbs">
    <div class="container">

    </div>
  </section>

@endsection