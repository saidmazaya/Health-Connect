@extends('layout.homegkguna')

@section('title', 'Register')

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

              <form method="POST" action="{{ route('register', ['redirect' => url()->current() == route('home') ? route('home') : null]) }}" onsubmit="return validatePassword()">
                @csrf

                <div class="form-outline form-white mb-4">
                  <label class="form-label text-black" for="name">Nama</label>
                  <input type="text" id="name" class="form-control" name="name" required>
                </div>

                <div class="form-outline form-white mb-4">
                  <label class="form-label text-black" for="username">Username</label>
                  <input type="text" id="username" class="form-control" name="username" value="@" required>
                  @if ($errors->has('username'))
                  <div class="text-danger mt-2">
                    @foreach ($errors->get('username') as $error)
                    <p>{{ $error }}</p>
                    @endforeach
                  </div>
                  @endif
                </div>

                <div class="form-outline form-white mb-4">
                  <label class="form-label text-black" for="email">Email</label>
                  <input type="email" id="email" class="form-control" name="email" required>
                  @if ($errors->has('email'))
                  <div class="text-danger mt-2">
                    @foreach ($errors->get('email') as $error)
                    <p>{{ $error }}</p>
                    @endforeach
                  </div>
                  @endif
                </div>

                <div class="form-outline form-white mb-4">
                  <label class="form-label text-black" for="password">Password</label>
                  <input type="password" id="password" class="form-control @error('password') is-invalid @enderror" name="password" required>
                  <small class="form-text text-muted">Minimum 8 characters, maximum 16 characters</small>
                  @if ($errors->has('password'))
                  <div class="text-danger mt-2">
                    @foreach ($errors->get('password') as $error)
                    <p>{{ $error }}</p>
                    @endforeach
                  </div>
                  @endif
                </div>

                <div class="form-outline form-white mb-4">
                  <label class="form-label text-black" for="password">Confirm Password</label>
                  <input type="password" id="password-confirm" class="form-control" name="password_confirmation" required autocomplete="new-password">
                  <div id="password-error" class="text-danger mt-2"></div>
                </div>

                <div class="text-center">
                  <button class="btn btn-primary px-5 mb-3" type="submit">Sign Up</button>
                </div>

                <div>
                  <br>
                  <p class="mb-0 text-black">Sudah Punya Akun? <a href="/login" class="text-black-50 fw-bold">Login</a></p>
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

  <script>
    function validatePassword() {
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("password-confirm").value;
      var passwordError = document.getElementById("password-error");
      if (password != confirmPassword) {
        passwordError.innerHTML = "Konfirmasi password tidak sesuai!";
        return false;
      }
      passwordError.innerHTML = "";
      return true;
      }
  </script>

  <script>
    document.getElementById("username").addEventListener("input", function(event) {
      var value = this.value;
      if (value.indexOf("@") === -1) {
          this.value = "@" + value; // Tambahkan karakter '@' jika tidak ada
      }
  });
  </script>

</section>
@endsection