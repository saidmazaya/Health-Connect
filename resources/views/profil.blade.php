

@extends('layout.home')

@section('title', 'Profil')

@section('konten')
<main id="main">
     <!-- ======= Portfolio Details Section ======= -->
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">

        </div>
      </section><!-- End Breadcrumbs -->

     <section id="portfolio-details" class="portfolio-details" data-aos="fade-up">
        <div class="container">
  
          <div class="row gy-4">
  
            <div class="col-lg-8">
              <div class="portfolio-details-slider swiper">
                <div class="swiper-wrapper align-items-center">
  
                  <div class="">
                    <p>
                      Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                      Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                      Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                      Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                    </p>
                    <div class="portfolio-description">
                      <h3>Riwayat Sejarah History</h3>

                      {{-- sejarah diskusi  --}}

                      <div style="margin-left: 12px" class="container">
                        <p style="font-size: 20px"> </p>
                        <div>
                           <b>Contoh Title</b> <i>3 mei 2022 </i> 

                          {{-- tombol edit dan remove  --}}

                            
                           <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                            <a><i class="bi bi-pencil-square"></i></a>
                          </button>
                          <form class="dropdown-menu p-4">
                            <div><i>Edit</i></div>
                            <div class="mb-3">
                             <textarea name="" id="" cols="30" rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo neque sed nam asperiores quod, iste aspernatur commodi, totam, eaque eligendi. Fugit nemo reiciendis alias odit vel dolor! Incidunt, vitae.</textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                          </form>
                        
                          <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                            <a><i class="bi bi-trash"></i></a>
                          </button>
                          <form class="dropdown-menu p-4">
                            <div><i>Apakah Anda Yakin Ingin Menghapus Ini?</i></div>
                            <button type="submit" class="btn btn-danger">Hapus</button>
                          </form>

                        {{-- tombol edit dan remove END  --}}
                      </div>

                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem architecto veritatis molestiae voluptatum ducimus sequi corrupti, ipsa error libero ex nisi reiciendis nemo similique, sed atque fugit neque quaerat! <a href="/detail-diskusi">Read More...</a>
                        </div>
                        <form action="">
                          <a class="btn"><i class="bi bi-arrow-up disabled">100</i></a>
                          <a class="btn"><i class="bi bi-arrow-down disabled">10</i></a>
                          <a class="btn"><i class="bi bi-heart-pulse"> Hati</i></a>
                            <select name="" id="">
                              <option value="d">Edit Kategori</option>
                              <option value="d">Hati</option>
                            </select>
                            <button class="btn btn-sm btn-primary">Submit</button>
                          </form>      
                        <hr>    
                    </div>

                    <div style="margin-left: 12px" class="container">
                      <p style="font-size: 20px"> </p>
                      <div>
                         <b>Contoh Title</b> <i>3 mei 2022</i>
                         <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                          <a><i class="bi bi-pencil-square"></i></a>
                        </button>
                        <form class="dropdown-menu p-4">
                          <div><i>Edit</i></div>
                          <div class="mb-3">
                           <textarea name="" id="" cols="30" rows="10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nemo neque sed nam asperiores quod, iste aspernatur commodi, totam, eaque eligendi. Fugit nemo reiciendis alias odit vel dolor! Incidunt, vitae.</textarea>
                          </div>
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </form>


                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                          <a><i class="bi bi-trash"></i></a>
                        </button>
                        <form class="dropdown-menu p-4">
                          <div><i>Apakah Anda Yakin Ingin Menghapus Ini?</i></div>
                          <button type="submit" class="btn btn-danger">Hapus</button>
                        </form>
                      

                      </div>
                      <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem architecto veritatis molestiae voluptatum ducimus sequi corrupti, ipsa error libero ex nisi reiciendis nemo similique, sed atque fugit neque quaerat! <a href="/detail-diskusi">Read More...</a>
                      </div>
                      <form action="">
                      <a class="btn"><i class="bi bi-arrow-up disabled">100</i></a>
                      <a class="btn"><i class="bi bi-arrow-down disabled">10</i></a>
                      <a class="btn"><i class="bi bi-heart-pulse"> Hati</i></a>
                        <select name="" id="">
                          <option value="d">Edit Kategori</option>
                          <option value="d">Hati</option>
                        </select>
                        <button class="btn btn-sm btn-primary">Submit</button>
                      </form>                     
                      <hr>    
                  </div> 

                    {{-- sejarah diskusi END  --}}
                    

                  <div class="container">
                    <br><br><br><br><br><br> <br><br><br><br><br><br><br><br><br><br><br><br>
                  </div>

                    </div>

                  </div>
  
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
  
            <div class="col-lg-4">
              <div class="portfolio-info">
                <h3><img style="border-radius: 10px;height:auto;width:200px" src="/assets/img/team/orang1.jpg" alt=""></h3>
                      
                <ul>
                  <li><strong>Nama</strong>: Said <a href="/edit-profil"><i class="bi bi-pencil-square">Edit</i></a></li> 
                  <li><strong>Email</strong>: Said572@healthconnect.com</li>
                  <li><strong>Ras</strong>: User</li>
                  <li>About</li>
                </ul>
              </div>
              
            </div>
  
          </div>
  
        </div>
      </section><!-- End Portfolio Details Section -->
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">

        </div>
      </section>
</main>
@endsection
