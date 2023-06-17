@extends('layout.homegkguna')

@section('konten')
<section id="hero">
    <div class="container py-1 h-50">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10 col-md-8 col-lg-5 col-xl-5">
          <div class="card text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
  
              <div class="mb-md-5 mt-md-4 pb-5">
  
                <h2 class="fw-bold mb-2 text-uppercase">Selamat Datang!</h2>
                
                <p class="text-black-50 mb-5">Masukkan Email Dan Password</p>
                
                    <div class="form-outline form-white mb-4">
                        <label class="form-label text-black" for="email">Nama</label>
                        <input type="email" id="email" class="form-control form-control-lg" name="email" required>
                    </div>
                
                    <div class="form-outline form-white mb-4">
                        <label class="form-label text-black" for="email">Username</label>
                        <input type="email" id="email" class="form-control form-control-lg" name="email" required>
                    </div>

                    <div class="form-outline form-white mb-4">
                        <label class="form-label text-black" for="email">Email</label>
                        <input type="email" id="email" class="form-control form-control-lg" name="email" required>
                    </div>
                
                    <div class="form-outline form-white mb-4">
                        <label class="form-label text-black" for="password">Password</label>
                        <input type="password" id="password" class="form-control form-control-lg @error('password') is-invalid @enderror" name="password" required>
                    </div>
                
                    <div class="text-center">
                        <a href="#about" class="btn-get-started scrollto">Login</a>
                    </div>
                
                    <div>
                        <br><p class="mb-0 text-black">Sudah Punya Akun? <a href="/login" class="text-black-50 fw-bold">Login</a></p>
                    </div>
                </form>
                
              </div>
  
              
  
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
 .gradient-custom {
        /* fallback for old browsers */
        
        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to right, rgb(255, 255, 255), rgba(37, 117, 252, 1));
        
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to right, rgb(255, 255, 255), rgba(37, 117, 252, 1))
        }
    </style>
   
  </section>
@endsection