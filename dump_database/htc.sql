-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2023 at 06:56 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `htc`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `author_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `title`, `description`, `content`, `image`, `slug`, `author_id`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'ASMA', 'Asma adalah penyakit kronis dimana saluran pernafasan mengalami penyempitan. Dikatakan kronis karena penyakit yang berlangsung lama bahkan dapat seumur hidup penderitanya.', '<p>Asma adalah penyakit kronis dimana saluran pernafasan mengalami penyempitan akibat:</p>\r\n\r\n<ol>\r\n	<li>Kejang pada otot-otot yang mengelilingi saluran pernafasan terkecil (bronkhiol) sehingga melilit. Kondisi ini dikenal dengan &ldquo;bronchokonstriksi&rdquo;.</li>\r\n	<li>Inflamasi: bengkak, menghasilkan lendir (mucus) yang lengket dalam jumlah berlebihan.</li>\r\n</ol>\r\n\r\n<p>Dikatakan kronis karena penyakit yang berlangsung lama bahkan dapat seumur hidup penderitanya. Yang dirasakan oleh penderitanya adalah kesulitan untuk menarik atau menghembuskan udara masuk dan keluar dari paru-paru. Gejala yang khas dari asma adalah mengi, batuk, sesak/nyeri dada dan sesak napas. Gejala ini dapat berlangsung ringan hingga parah.</p>\r\n\r\n<p>Asma dapat muncul pada berbagai usia. Sebagian penderita mendapatkan gejala pertamanya pada masa kanak-kanak, yang kemudian menghilang ketika tumbuh dewasa. Hal ini biasa terjadi karena yang bersangkutan pindah tempat tinggal, sudah lebih kuat menghadapi pemicu asma atau pemicu menghilang seiring dengan berjalannya waktu. Penderita yang lain mulai menderita asma justru setelah dewasa, tanpa pernah mendapatkan gejala selagi anak-anak.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Jenis dan tipe asma</strong></p>\r\n\r\n<p>Apakah anda mengetahui bahwa ternyata asma memiliki beberapa jenis? Mengetahui jenis asma akan membuat kita mengerti seberapa efektif pengobatan yang sedang jalani saat serangan asma datang kembali.<br />\r\nBerdasarkan pemicu atau kejadiannya, asma dibedakan menjadi</p>\r\n\r\n<ol>\r\n	<li>Asma alergi (Allergic Asthma)<br />\r\n	Apakah reaksi alergi membuat anda mengalami batuk,bersin hingga mengi? Jika anda mengalami asma alergi, saluran pernafasan anda akan ekstra sensitif terhadap alergen tertentu. Saat tubuh anda bersentuhan dengan alergen tersebut maka sistem imun tubuh akan bereaksi dengan cepat.<br />\r\n	Yang termasuk alergen adalah<br />\r\n	a. Serbuk sari bunga, rumput<br />\r\n	b.&nbsp;Kecoa<br />\r\n	c.&nbsp;Bulu,&nbsp; binatang<br />\r\n	d.&nbsp;Debu rumah<br />\r\n	e.&nbsp;Jamur. Biasanya jamur yang terdapat pada wastafel, kamar mandi, dan tempat lembab lainnya.<br />\r\n	f.&nbsp;Kutu rumah<br />\r\n	<br />\r\n	Selain itu juga ada beberapa hal yang bersifat iritan yang juga dapat menjadi pemicunya seperti<br />\r\n	a. Asap<br />\r\n	b. Polusi<br />\r\n	c. Udara dingin<br />\r\n	d. pewangi<br />\r\n	e. Parfum<br />\r\n	f. Cat yang belum kering.<br />\r\n	&nbsp;</li>\r\n	<li>Asma non-alergi (Non-Allergic Asthma)<br />\r\n	Asma jenis ini muncul tidak berkaitan dengan reaksi alergi.<br />\r\n	&nbsp;</li>\r\n	<li>Nocturnal Asthma<br />\r\n	Asma jenis ini hanya muncul saat malam hari, terutama ketika penderita sedang tidur. Pemicu asma jenis ini adalah<br />\r\n	a.&nbsp;Kondisi fungsi pernafasan yang memang menurun di malam hari hingga dini hari.<br />\r\n	b.&nbsp;Pada malam hari, sewaktu tidur, saluran pernafasan lebih lama terpapar kutu, bulu dan debu yang terdapat pada&nbsp; bantal, sprei atau selimut.<br />\r\n	c.&nbsp;Pemaparan terhadap allergen pada siang hari dapat menyebabkan reaksi lambat penyempitan saluran pernafasan yang terjadi 3-8 jam kemudian, yaitu pada malam hari sewaktu tidur.<br />\r\n	d.&nbsp;Suhu tubuh turun pada saat tidur: hal ini dapat memicu penyempitan saluran nafas.<br />\r\n	&nbsp;</li>\r\n	<li>Exercise-induced Asthma<br />\r\n	Asma jenis ini muncul karena dipicu oleh aktifitas tubuh seperti olahraga terutama olahraga seperti jogging, lari dan jalan cepat. 5 &ndash; 20Sayangnya mjustru Jika anda mengalami asma jenis ini, segeralah periksakan kondisi kesehatan anda ke dokter. dokter akan memberikan obat yang dapat digunakan sebelum anda melakukan olahraga.<br />\r\n	&nbsp;</li>\r\n	<li>Occupational Asthma<br />\r\n	Asma jenis ini adalah asma yang berhubungan dengan tempat/ jenis pekerjaan seperti<br />\r\n	a.&nbsp;Peternak, adanya bulu hewan<br />\r\n	b.&nbsp;Peneliti hewan, adanya serbuk sari<br />\r\n	c.&nbsp;Peternak lebah<br />\r\n	d.&nbsp;Penjahit, adanya serat halus dari potongan kain.<br />\r\n	&nbsp;</li>\r\n	<li>Asma pada kehamilan<br />\r\n	Dari seluruh populasi wanita hamil, 4%-nya mengalami asma. Bahkan tidak jarang ada yang pertama kali menderita asma justru saat kehamilan. Kondisi ini sering diartikan sebagai &ldquo;bawaan bayi&rdquo;. Padahal hal tersebut tidaklah benar. Asma saat kehamilan perlu ditangani dengan benar, karena dapat beresiko buruk baik pada ibu dan janinnya. Sayangnya asma saat kehamilan tidak 100% bisa hilang setelah melahirkan. Sepertiga<br />\r\n	Jika kondisi ini tidak ditangani dengan benar, maka dapat beresiko:<br />\r\n	a.&nbsp;Asma ringan<br />\r\n	&nbsp; &nbsp; - Mual di awal kehamilan semakin parah<br />\r\n	&nbsp;&nbsp; &nbsp;-&nbsp;Bayi lahir premature<br />\r\n	&nbsp;&nbsp; &nbsp;-&nbsp;Bayi lahir dengan berat rendah<br />\r\n	&nbsp;&nbsp; &nbsp;-&nbsp;Bayi meninggal ketika dilahirkan.<br />\r\n	b.&nbsp;Asma sedang<br />\r\n	&nbsp;&nbsp; &nbsp;Resiko harus melahirkan melalui operasio Caesar.<br />\r\n	c.&nbsp;Asma parah<br />\r\n	&nbsp;&nbsp; &nbsp;-&nbsp;Hipertensi<br />\r\n	&nbsp;&nbsp; &nbsp;-&nbsp;Pre-eclampsia<br />\r\n	&nbsp;&nbsp; &nbsp;-&nbsp;Kondisi dimana&nbsp;tekanan darah tinggi&nbsp;&ge; 140/90 mmHg pada wanita hamil di usia kehamilan 20 minggu hingga seminggu setelah melahirkan, ditandai bengkak di pergelangan kaki dan ditemukan protein di urine.<br />\r\n	&nbsp;&nbsp; &nbsp;-&nbsp;Placenta previa. Kondisi dimana sel telur yang sudah dibuahi tertanam di rahim bagian bawah, sehingga placenta menutupi mulut rahim.Placenta ini dapat putus ketika bayi dilahirkan dan dapat menyebabkan &nbsp; &nbsp; &nbsp; kerusakan otak pada bayi. Placenta previa merupakan penyebab utama terjadinya pendarahan tanpa rasa sakit pada 3 bulan pertama kehamilan.<br />\r\n	d.&nbsp;Pendarahan rahim.<br />\r\n	&nbsp;</li>\r\n</ol>\r\n\r\n<p><strong>Tanda dan Gejala Asthma</strong></p>\r\n\r\n<ol>\r\n	<li><strong>Asma Ringan</strong><br />\r\n	Gejala pada asthma ringan dapat berupa terdengar suara &ldquo;ngik&rdquo; ketika bernafas dan pilek atau infeksi dada yang disertai oleh batuk. Untuk sebagian besar orang dewasa tidak mengalami gejala namun pada anak-anak dapat mengalami batuk ketika malam hari.</li>\r\n	<li><strong>Asma Moderate</strong><br />\r\n	Gejala pada asthma moderate dapat berupa terdengar suara &ldquo;ngik&rdquo; ketika bernafas&nbsp; dan batuk dalam waktu yang lama, nafas yang pendek, suara menjadi serak. Gejala sering menjadi lebih buruk pada malam hari. Pada malam hari dapat membuat terbangun dari tidur karena batuk atau dengan dada yang terasa ketat. Pada anak kecil tidak memiliki gejala yang khas.</li>\r\n	<li><strong>Serangan Asma</strong><br />\r\n	Gejala pada serangan asthma dapat berupa suara yang menjadi serak, mengalami kesulitan bernafas, kesulitan berbicara dan gejala pada asthma moderate dapat memburuk.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Faktor resiko asma</strong><br />\r\nBeberapa faktor yang dapat meningkatkan peluang berkembangnya asma, yaitu:</p>\r\n\r\n<ol>\r\n	<li>Tinggal di perkotaan, sehingga meningkatkan pemaparan terhadap polusi</li>\r\n	<li>Perokok pasif</li>\r\n	<li>Pemaparan terhadap zat kimia yang digunakan dalam pertanian, perawatan rambut, industry cat, plastic dan elektronik</li>\r\n	<li>Mempunyai orang tua penderita asma</li>\r\n	<li>Sering terinfeksi saluran pernafasan pada masa kanak-kanak, terutama pada usia awal 2 tahun.</li>\r\n	<li>Lahir dengan berat badan lemah.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Faktor yang Memperparah</strong><br />\r\nGejala asma dapat semakin parah dari waktu ke waktu. Sering kali tidak ada sebab yang jelas mengapa asma menjadi semakin parah. Namun beberapa penelitian menemukan beberapa hal yang dapat memperparah kondisi asma seperti</p>\r\n\r\n<ol>\r\n	<li>Infeksi</li>\r\n	<li>Serbuk sari saat musim kemarau datang</li>\r\n	<li>Efek samping obat</li>\r\n	<li>Merokok</li>\r\n	<li>Bahan-bahan kimia</li>\r\n	<li>Tingkat stress</li>\r\n	<li>Makanan</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Penanganan asma</strong><br />\r\nAsma tidak bisa benar-benar disembuhkan, tetapi dapat ditangani dengan baik menggunakan obat-obatan yang tepat. Tujuan pengobatan asma adalah</p>\r\n\r\n<ol>\r\n	<li>Membuat saluran nafas selebar dan senormal mungkin</li>\r\n	<li>Menjalani hari-hari bebas gejala asma sebanyak mungkin.</li>\r\n	<li>Dapat beraktifitas normal: bekerja, olahraga, sekolah</li>\r\n	<li>Malam hari bisa tidur nyenyak tanpa terganggu gejala asma.</li>\r\n</ol>\r\n\r\n<p>Bagi wanita hamil penderita asma, pengobatan memberikan manfaat tambahan:</p>\r\n\r\n<ol>\r\n	<li>Melahirkan bayi pada usia kehamilan normal (tidak premature)</li>\r\n	<li>Melahirkan bayi dengan berat dan panjang normal.</li>\r\n	<li>Mengurangi resiko bayi lahir mati.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Sebagian besar penderita asma mengatasi serangan asma dengan menggunakan obat inhaler. Obat dengan bentuk inhaler memiliki dosis yang kecil yang bekerja langsung pada saluran pernapasan. Penanganan asma tidak hanya sebatas mengatasi serangan tetapi juga mencegah serangan datang kembali. Tentu pengobatannyapun akan berbeda.<br />\r\nSelain itu berikut ini adalah beberapa hal yang perlu diperhatikan bagi penderita asma:</p>\r\n\r\n<ul>\r\n	<li>Berkonsultasi dengan dokter terkait terapi pengobatan.</li>\r\n	<li>Berkonsultasi dengan apoteker terkait penggunaan dan penyimpanan obat yang benar</li>\r\n	<li>Membawa obat setiap saat.<br />\r\n	Hal ini bertujuan sebagai antisipasi apabila terjadi serangan asma secara tiba-tiba.</li>\r\n	<li>Menjauhi zat-zat yang dapat membuat alergi.</li>\r\n</ul>\r\n\r\n<p>Ingatlah bahwa penanganan dan pengobatan asma tidak selalu sama untuk semua orang. Periksakan kondisi kesehatan anda ke dokter, terutama dokter spesialis paru untuk mendapatkan penanganan dan pengobatan yang tepat.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Sumber :</p>\r\n\r\n<ol>\r\n	<li>American Academy of Allergy Asthma and Imunology, 2016&nbsp;<a href=\"http://www.aaaai.org/conditions-and-treatments\">http://www.aaaai.org/conditions-and-treatments</a>.</li>\r\n	<li>National Heart, Lung, and Blood Institute, 2016.&nbsp;<a href=\"http://www.nhlbi.nih.gov/health/health-topics/\">http://www.nhlbi.nih.gov/health/health-topics/</a></li>\r\n	<li><a href=\"http://patient.info/health/asthma-leaflet\">http://patient.info/health/asthma-leaflet</a></li>\r\n	<li><a href=\"http://www.webmd.com/asthma/default.htm\">http://www.webmd.com/asthma/default.htm</a></li>\r\n</ol>', NULL, '@adminhtc_asma-4899182', 1, 48, '2023-06-19 21:29:05', '2023-06-19 21:29:05'),
(2, 'TUBERKULOSIS (TBC)', 'Pencegahan tuberkulosis dapat dilakukan dengan mendapatkan vaksin Bacillus Calmette-Guerin (BCG) yang umumnya diberikan saat bayi.', '<p>Tuberkulosis(TB) adalah&nbsp;penyakit menular yang berpotensi serius dan umumnya&nbsp;menyerang paru-paru. Penyebab tuberkulosis adalah infeksi dari bakteri&nbsp;<em>Mycobacterium tuberculosis</em>&nbsp;yang dapat menyebar melalui kelenjar getah bening dan aliran darah ke organ dalam tubuh. Kebanyakan orang yang terkena TB tidak pernah menunjukkan gejala karena bakteri dapat hidup dalam bentuk tidak aktif pada tubuh dan dapat menjadi aktif ketika sistem kekebalan tubuh menurun. Tuberkulosis ditularkan melalui udara adalah dengan cara bila seseorang menghirup cairan yang telah terinfeksi&nbsp;<em>Mycobacterium tuberculosis&nbsp;</em>seperti air liur atau lendir atau darah dari penderita TB. Penyakit TB dapat berakibat fatal jika tidak ditangani secara tepat. Penegakkan diagnosis TB adalah dengan pengecekkan tes darah, X-ray pada bagian dada, pengecekkan sputum atau lendir.</p>\r\n\r\n<p><strong>Tanda dan Gejala TB</strong><br />\r\nKetika tubuh telah terinfeksi oleh kuman tuberkulosis, sistem kekebalan tubuh dapat mencegah kuman tersebut aktif. Berdasarkan kondisi tersebut&nbsp;kuman TB dapat dibagi menjadi&nbsp;dua jenis :</p>\r\n\r\n<p><em>TB Pasif</em><br />\r\nPada kondisi ini seseorang memiliki infeksi TB tetapi bakteri pada tubuh dalam keadaan tidak aktif dan tidak menimbulkan gejala. Tb pada jenis ini tidak menular. TB pasif dapat berubah menjadi aktif sehingga pengobatan tetap penting bagi penderita TB pasif dan juga dapat membantu mencegah penyebaran/penularan TB.</p>\r\n\r\n<p><em>TB Aktif</em><br />\r\nPada kondisi ini seseorang mengalami sakit dan dapat menular ke orang lain. TB dapat langsung aktif pada minggu pertama setelah infeksi atau terjadi pada tahun selanjutnya. Berikut beberapa tanda dan gejala TB aktif :</p>\r\n\r\n<ul>\r\n	<li>Batuk&nbsp; berlangsung selama tiga minggu atau lebih.</li>\r\n	<li>Batuk darah</li>\r\n	<li>Nyeri dada ketika bernafas atau batuk.</li>\r\n	<li>Penurunan berat badan tanpa sebab yang jelas.</li>\r\n	<li>Lebih cepat lelah.</li>\r\n	<li>Demam.</li>\r\n	<li>Berkeringat pada malam hari tanpa sebab yang jelas.</li>\r\n	<li>Meriang.</li>\r\n	<li>Kehilangan selera makan.</li>\r\n</ul>\r\n\r\n<p>Tuberculosis juga dapat mempengaruhi bagian lain dari tubuh seperti ginjal, tulang belakang, atau otak. Saat TB berada diluar paru-paru, maka tanda dan gejalanya sesuai dengan organ yang terinfeksi. Misalnya, jika seseorang terinfeksi TB pada tulang belakang maka akan mengalami gejala seperti nyeri punggung.</p>\r\n\r\n<p><strong>Faktor Resiko</strong><br />\r\nBerikut beberapa faktor yang dapat meningkatkan resiko TB :</p>\r\n\r\n<ul>\r\n	<li>Kontak langsung dengan penderita TB<br />\r\n	Resiko terinfeksi TB berhubungan dengan sifat TB dan lama paparannya seperti contohnya bila salah satu anggota rumah tangga terkena TB maka faktor resiko 1 dari 3 orang kemungkinan tertular.</li>\r\n	<li>Faktor usia<br />\r\n	Orang lanjut usia dan anak-anak memiliki resiko lebih tinggi terkena TB karena sistem kekebalan tubuh yang kurang kuat sehingga lebih mudah terinfeksi TB.</li>\r\n	<li>Sistem kekebalan tubuh<br />\r\n	Sistem kekebalan tubuh yang melemah karena penyakit dan obat dapat menjadi penyebab mudahnya terkena TB. Contoh penyakit yang dapat melemahkan sistem kekebalan tubuh adalah HIV/AIDS, diabetes melitus, dan gangguan ginjal yang parah. Contoh terapi pengobatan yang dapat melemahkan sistem kekebalan tubuh adalah terapi kanker (kemoterapi), obat yang digunakan untuk&nbsp;<em>rheumatoid arthritis</em>.</li>\r\n	<li>Melakukan perjalanan ke daerah mayoritas terinfeksi TB dapat meningkatkan faktor resiko terkena TB karena pemaparan infeksi dalam waktu yang lama.</li>\r\n	<li>Kondisi lingkungan<br />\r\n	Kondisi lingkungan seperti tempat bekerja dan lingkungan perumahan dapat menjadi faktor resiko terinfeksi TB.</li>\r\n</ul>\r\n\r\n<p><strong>Terapi dan pengobatan</strong><br />\r\nTerapi pengobatan Anti-TB adalah satu-satunya pengobatan yang dibutuhkan. Pengobatan TB membutuhkan waktu yang lebih lama minimal enam sampai sembilan bulan. Pengobatan TB juga tergantung pada faktor usia, kondisi kesehatan, respon terhadap obat, jenis TB dan lokasi terinfeksinya di tubuh.<br />\r\nPenggunaan obat TB kemungkinan memiliki efek samping yang membuat tidak nyaman namun tidak membahayakan, seperti :</p>\r\n\r\n<ul>\r\n	<li>Mual dan muntah.</li>\r\n	<li>Kehilangan nafsu makan.</li>\r\n	<li>Kulit menjadi berwarna kuning.</li>\r\n	<li>Urin atau kencing menjadi berwarna keruh bahkan kemerahan.</li>\r\n	<li>Demam tanpa sebab.</li>\r\n</ul>\r\n\r\n<p><strong>Bagaimana cara pencegahan TB?</strong><br />\r\nPencegahan TB dapat dilakukan dengan mendapatkan vaksin&nbsp;<em>Bacillus Calmette-Guerin</em>&nbsp;(BCG). Vaksin BCG umumnya diberikan saat bayi karena dapat mencegah terinfeksi TB saat usia anak-anak. Selain itu, pencegahan TB dapat dilakukan oleh seseorang yang terinfeksi TB dengan cara minum obat secara rutin hingga tuntas. Selain itu, seseorang yang terinfeksi TB juga dapat melakukan beberapa upaya&nbsp;untuk mencegah penularan TB:</p>\r\n\r\n<ul>\r\n	<li>Hindari untuk bepergian atau berada ditempat atau ruangan yang berisi banyak orang.</li>\r\n	<li>Memiliki ventilasi ruangan karena kuman tuberculosis dapat menyebar lebih mudah di ruangan tertutup dan kecil dimana tidak ada sirkulasi udara.</li>\r\n	<li>Menutup mulut dengan tangan atau tisu ketika tertawa, bersin, atau batuk. Tisu yang sudah digunakan masukkan kedalam plastic dan disegel sebelum dibuang.</li>\r\n	<li>Menggunakan masker khusus bagi penderita TB ketika berada disekitar orang terutama selama tiga minggu pertama pengobatan. Upaya ini dapat membantu mengurangi resiko penularan.</li>\r\n</ul>\r\n\r\n<p><strong><em>Mari stop TB dengan melakukan pengobatan hingga tuntas dan membawa anak anda untuk mendapatkan vaksin BCG</em></strong></p>\r\n\r\n<p>Sumber :</p>\r\n\r\n<ol>\r\n	<li>Mayo Clinic. (2017, 08 Agustus). Tuberculosis. Diperoleh 09 November 2017 dari:&nbsp;<a href=\"https://www.mayoclinic.org/diseases-conditions/tuberculosis/symptoms-causes/syc-20351250\" target=\"_blank\">https://www.mayoclinic.org/diseases-conditions/tuberculosis/symptoms-causes/syc-20351250</a></li>\r\n	<li>Patient. (2014, 21 Mei). Tuberculosis. Diperoleh 09 November 2017 dari:&nbsp;<a href=\"https://patient.info/doctor/tuberculosis-pro\" target=\"_blank\">https://patient.info/doctor/tuberculosis-pro</a></li>\r\n	<li>WebMD. (2017, 23 Maret). What is Tuberculosis. Diperoleh 09 November 2017 dari:&nbsp;<a href=\"https://www.webmd.com/lung/understanding-tuberculosis-basics#1\" target=\"_blank\">https://www.webmd.com/lung/understanding-tuberculosis-basics#1</a>&nbsp;&nbsp;</li>\r\n</ol>', NULL, '@adminhtc_tuberkulosis-tbc-7226831', 1, 42, '2023-06-19 21:30:08', '2023-06-19 21:30:08'),
(3, 'KENALI TANDA DAN GEJALA GAGAL GINJAL', 'Penyakit ginjal kronis atau yang umumnya disebut dengan gagal ginjal kronis merupakan kondisi dimana ginjal secara bertahap akan kehilangan fungsinya.', '<p>Pada penyakit ginjal kronis yang sudah mencapai tahap lanjut akan menyebabkan terjadinya peningkatan cairan, elektrolit dan limbah berbahaya dalam tubuh. Gagal ginjal dapat terjadi karena berbagai kondisi tubuh. Tingkat keparahannya dapat bervariasi, namun pada kasus ringan atau sedang tidak menyebabkan gejala. Seseorang yang mengalami gagal ginjal memiliki peningkatan resiko terkena penyakit jantung atau stroke. Karena kemungkinan terdapat komplikasi ini maka sanagt penting untuk dapat mendeteksi gagal ginjal sedini mungkin. Pengobatan sedini mungkin dapat memperlambat perkembangan penyakit dan juga mengurangi resiko terjadinya penyakitjantung atau stroke.</p>\r\n\r\n<p><strong>Apakah yang dimaksud dengan gagal ginjal?</strong><br />\r\nGagal ginjal merupakan kondisi dimana ginjal tidak bisa bekerja dengan baik. Terdapat dua bentuk gagal ginjal:</p>\r\n\r\n<ul>\r\n	<li>Penyakit ginjal kronis</li>\r\n	<li>Penyakit ginjal akut. Kondisi ini merupakan gagal ginjal akut dimana fungsi ginjal cepet terpengaruh. Ginjal bisa masuk dalam tahap gagal ginjal akut karena terjadi infeksi pada darah. Hal ini berbeda dengan gagal ginjal kronis karena perkembangannya terjadi secara bertahap.</li>\r\n</ul>\r\n\r\n<p><strong>Bagaimana cara mengetahui fungsi ginjal?</strong><br />\r\nFungsi ginjal dapat diketahui dengan menggunakan pemeriksaan darahyang disebut dengan perkiraan laju filtrasi glomerulus (eGFR) dan ukuran jumlah protein dalam urin (proteinuria). Peningkatan protein dalam urin dan penurunan eGFR terkait dengan peningkatan resiko perkembangan gagal ginjal.</p>\r\n\r\n<p><strong>Berapakah rentang normal untuk eGFR?</strong><br />\r\nPerkiraan laju filtrasi glomerulus (eGFR) normal adalah 90ml/menit/ 1,73m2 atau lebih. Jika beberapa glomeruli tidak dapat menyaring sesuai jumlah normal maka ginjal diketahui telah mengalami penurunan atau gangguan fungsi ginjal. Pemeriksaan eGFR menggunakan pemeriksaan darah dengan mengukur zat kimia yang disebut kreatinin. Kreatinin adalah hasil dari pemecahan otot. Umumnya ginjal akan membersihkan darah dari kreatinin. Jika ginjal tidak bekerja dengan baik dan glomerulus tidak menyaring darah sebanyak normal maka tingkat kreatinin dalam darah akan meningkat.</p>\r\n\r\n<p><strong>Mengapa urin dapat mengandung protein?</strong><br />\r\nProteinuria merupakan kondisi dimana urin mengandung sejumlah protein yang tidak normal. Sejumlah besar protein susah untuk melewati penyaringan ginjal sehingga akan masuk ke dalam urin. Namun, dalam kondisi normal sejumlah kecil protein (albumin) akan keluar dalam urin. Jika fungsi ginjal menurun maka akan terdapat sejumlah besar albumin dan protein lain masuk dalam urin. Proteinuria juga dapat terkait dengan peningkatan resiko terjadinya penyakit jantung dan pembuluh darah.</p>\r\n\r\n<p><strong>Bagaimana tanda dan gejala gagal ginjal?</strong><br />\r\nGagal ginjal ringan hingga sedang yaitu pada stadium 1 hingga 3 tidak terlalu menunjukkan gejala. Gejala umumnya berkembang saat gagal ginjal mencapat tahap kronis. Gejala umumnya tidak bersifat khusus seperti merasa lelah, kurang memiliki energi dari pada biasanya dan tidak enak badan. Dengan berkembangnya gagal ginjal menjadi lebih parah, gejala yang kemungkinan timbul antara lain:</p>\r\n\r\n<ul>\r\n	<li>Kesusahan berpikir jenih</li>\r\n	<li>Nafsu makan yang buruk</li>\r\n	<li>Penurunan berat badan</li>\r\n	<li>Kulit menjadi kering dan gatal</li>\r\n	<li>Mengalami kram otot</li>\r\n	<li>Mengalami kelebihan cairan yang menyebabkan bengkak pada kaki dan pergelangan kaki</li>\r\n	<li>Mata menjadi bengkak</li>\r\n	<li>Terjadi peningkatan frekuensi buang air kecil dari biasanya</li>\r\n	<li>Kulit menjadi pucat karena terjadi anemia</li>\r\n	<li>Badan menjadi terasa tidak enak</li>\r\n</ul>\r\n\r\n<p>Jika penurunan fungsi ginjal hingga pada stadium 4 atau 5 maka berbagai masalah lainnya dapat terjadi misalnya seperti anemia dan ketidakseimbangan kalsium, fosfat, dan zat kimia lainnya dalam aliran darah.&nbsp; Kondisi ini dapat menyebabkan berbagai gejala seperti kelelahan karena anemia dan pengeroposan tulang atau patah tulang karena kalsium dan ketidakseimbangan fosfat.</p>\r\n\r\n<p><strong>Bagaimanakah stadium pada gagal ginjal?</strong><br />\r\nTerdapat lima stadium pada gagal ginjal berdasarkan fungsi ginjal (eGFR).</p>\r\n\r\n<ul>\r\n	<li>Stadium 1<br />\r\n	eGFR menunjukkan fungsi ginjal normal namun telah diketahui memiliki beberapa kerusakan atau penyakit ginjal seperti terdapat protein atau darah dalam urin, kelainan ginjal, radang ginjal, dll. Nilai eGFR lebih dari 90ml/menit/1,73m2.</li>\r\n	<li>Stadium 2<br />\r\n	Terjadinya penurunan fungsi ginjal dan sudah diketahui memiliki beberapa kerusakan ginjal atau penyakit. Nilai eGFR adalah 60-89 tanpa terjadi kerusakan ginjal atau penyakit yang berhubungan dengan gagal ginjal kronis.</li>\r\n	<li>Stadium 3<br />\r\n	Terjadi penurunan fungsi ginjal dengan atau tanpa penyakit ginjal. Misalnya, pada orang lanjut usia dengan ginjal tua mengalami penurunan fungsi ginjal tanpa penyakit ginjal yang diketahui. Nilai eGFR pada stadium ini adalah 45-59ml/menit/1,73m2(3A) dan 30-44ml/menit/1,73m2(3B).</li>\r\n	<li>Stadium 4<br />\r\n	Terjadi penurunan fungsi ginjal secara parah dengan atau tanpa penyakit ginjal. Nilai eGFR pada stadium ini adalah 15-29ml/menit/1,73m2.</li>\r\n	<li>Stadium 5<br />\r\n	Terjadi keparahan penurunan fungsi ginjal yang umumnya disebut dengan gagal ginjal. Nilai eGFR pada stadium ini kurang dari 15ml/menit/1,73m2</li>\r\n</ul>\r\n\r\n<p><strong>Apakah penyebab gagal ginjal?</strong><br />\r\nGagal ginjal dapat terjadi ketika penyakit atau kondisi kesehatan tertentu menurunkan fungsi ginjal dan kerusakan secara bertahap pada ginjal. Penyakit dan kondisi kesehatan yang menyebabkan gagal ginjal adalah:</p>\r\n\r\n<ul>\r\n	<li>Diabetes tipe 1 dan 2</li>\r\n	<li>Tekanan darah tinggi</li>\r\n	<li>Glomerulonephritis (radang pada bagian glomeruli ginjal)</li>\r\n	<li>Peradangan pada tubulus ginjal dan struktur sekitarnya</li>\r\n	<li>Ganguan kesehatan pada saluran kemih, seperti pembesaran prostat, batu ginjal, dan beberapa jenis kanker</li>\r\n	<li>Refluks&nbsp; Vesicoureteral merupakan suatu kondisi yang menyebabkan urin kembali ke ginjal</li>\r\n	<li>Infeksi ginjal berulang</li>\r\n</ul>\r\n\r\n<p><strong>Apakah faktor yang meningkatkan resiko terjadinya gagal ginjal?</strong><br />\r\nFaktor yang dapat meningkatkan resiko terjadinya gagal ginjal adalah:</p>\r\n\r\n<ul>\r\n	<li>Diabetes</li>\r\n	<li>Tekanan darah tinggi</li>\r\n	<li>Gangguan pada jantung dan pembuluh darah</li>\r\n	<li>Merokok</li>\r\n	<li>Obesitas</li>\r\n	<li>Faktor keturunan penyakit ginjal dari keluarga</li>\r\n	<li>Struktur ginjal yang tidak normal</li>\r\n	<li>Faktor usia</li>\r\n</ul>\r\n\r\n<p><strong>Bagaimana cara mencegah gangguan pada ginjal?</strong><br />\r\nUntuk menurunkan resiko terjadinya penyakit ginjal dapat dilakukan beberapa langkah seperti:</p>\r\n\r\n<ul>\r\n	<li>Mengikuti petunjuk pada brosur obat bebas atau berkonsultasi dengan apoteker sebelum mengkonsumsi obat penghilang rasa nyeri seperti aspirin, ibuprofen, dan paracetamol. Mengkonsumsi obat penghilang nyeri terlalu banyak dapat menyebabkan kerusakan ginjal dan perlu dihindari bagi seseorang yang memiliki penyakit ginjal. Berkonsultasilah dengan dokter sebelum mengkonsumsi obat.</li>\r\n	<li>Mengontrol berat badan agar tetap dalam rentang normal. Melakukan olahraga fisik secara rutin setiap hari untuk mengontrol berat badan. Jika memiliki berat badan yang berlebih, berkonsultasilah dengan dokter untuk cara menurunkan berat badan secara sehat.</li>\r\n	<li>Berhenti merokok. Merokok dapat merusak ginjal dan memperparah kerusakan ginjal. Berkonsultasilah dengan dokter untuk cara berhenti merokok.</li>\r\n	<li>Melakukan pemeriksaan kondisi kesehatan secara rutin dan berkonsultasi dengan dokter untuk evaluasi hasilnya.</li>\r\n</ul>\r\n\r\n<p><em><strong>Keep your kidney healthy and Enjoy your life&nbsp;</strong></em></p>\r\n\r\n<p>Jika Sahabat Viva memiliki pertanyaan lebih lanjut, silahkan kirimkan melalui:</p>\r\n\r\n<ol>\r\n	<li>Layanan Tanya Jawab Kesehatan melalui&nbsp;<strong>SMS Hotline</strong>&nbsp;atau&nbsp;<strong>Whatsapp</strong>&nbsp;di nomor&nbsp;<strong>0812 919 08500</strong></li>\r\n	<li>Konsultasi Online pada hari Senin-Jumat pukul 08.00-17.00 WIB</li>\r\n</ol>\r\n\r\n<p>Pertanyaan anda akan dijawab langsung oleh tenaga kesehatan kami. Kunjungi juga akun&nbsp;<strong>Fanpage VivaHealthIndonesia</strong>&nbsp;untuk melihat jadwal kegiatan Apotek Viva di kota Anda dan info kesehatan lainnya.</p>\r\n\r\n<p>Sumber:</p>\r\n\r\n<ol>\r\n	<li><em>Mayo Clinic. (2017, 04 Agustus). Chronic Kidney Disease. Diperoleh 09 Februari 2018 dari:&nbsp;<a href=\"https://www.mayoclinic.org/diseases-conditions/chronic-kidney-disease/symptoms-causes/syc-20354521\" target=\"_blank\">https://www.mayoclinic.org/diseases-conditions/chronic-kidney-disease/symptoms-causes/syc-20354521</a></em></li>\r\n	<li><em>Patient. (2017, 11 Desember). Chronic Kidney Disease. Diperoleh 09 Februari 2018 dari:&nbsp;<a href=\"https://patient.info/health/chronic-kidney-disease-leaflet\" target=\"_blank\">https://patient.info/health/chronic-kidney-disease-leaflet</a></em></li>\r\n</ol>', NULL, '@adminhtc_kenali-tanda-dan-gejala-gagal-ginjal-6601321', 1, 55, '2023-06-19 21:31:47', '2023-06-19 21:31:47'),
(4, 'CACAR AIR - CHICKENPOX', '\'Lho sudah besar kok masih kena cacar air?\'. Kalimat diatas masih sering kita dengarkan karena terdapat mitos yang tidak sepenuhnya benar di masyarakat. Mungkin karena umumnya penderita cacar masih usia anak-anak.', '<blockquote>\r\n<p>Lho sudah besar kok masih kena cacar air ?</p>\r\n</blockquote>\r\n\r\n<p>Kalimat diatas masih sering kita dengarkan dikarenakan terdapat mitos yang tidak sepenuhnya benar di masyarakat. Cacar air memang biasa diderita oleh anak usia dibawah 10 tahun, namun pada orang dewasa dapat menderita cacar air karena sistem kekebalan tubuh yang rendah.<br />\r\nCacar air atau varicella adalah penyakit menular yang disebabkan oleh virus varicella-zoster. Cacar air dapat menular dengan cepat kepada orang-orang yang tidak pernah menderita cacar air ataupun yang sudah mendapatkan vaksin. Cacar air menyebabkan ruam kecil yang menyebabkan gatal, melepuh dan berisi cairan. Gejala cacar air lebih buruk terjadi pada orang dewasa. Sebelum mendapatkan vaksin secara rutin hampir semua orang telah terinfeksi pada saat mencapai usia dewasa. Mayoritas cacar air diderita sebelum usia 10 tahun.</p>\r\n\r\n<p><strong>Tanda dan Gejala Cacar Air</strong></p>\r\n\r\n<ol>\r\n	<li>Demam dan nyeri kepala pada hari pertama atau sebelum ruam merah muncul.</li>\r\n	<li>Hidung berair dan batuk kering.</li>\r\n	<li>Terdapat ruam yang akan berkembang menjadi lepuh kecil dan gatal. Ruam dapat muncul disemua bagian tubuh dan kadang-kadang juga di mulut. Terdapat tiga fase untuk perkembangan ruam pada cacar air :</li>\r\n</ol>\r\n\r\n<ul>\r\n	<li>Munculnya bintik atau benjol berwarna merah atau merah muda yang akan keluar selama beberapa hari.</li>\r\n	<li>Bintik atau benjol berkembang menjadi lepuhan yang berisi cairan yang dapat meletus dan mengeluarkan cairan.</li>\r\n	<li>Luka lepuh yang meletus</li>\r\n</ul>\r\n\r\n<ol>\r\n	<li>Kehilangan nafsu makan.</li>\r\n	<li>Lebih mudah lelah, lemah dan sakit kepala ringan.</li>\r\n	<li>Tubuh merasa nyeri.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Kapan harus ke Dokter?</strong><br />\r\nJika sudah menduga menderita cacar air pada Anda atau anak Anda maka perlu dikonsultasikan dengan Dokter. Sampaikan kepada Dokter apabila terjadi kondisi seperti berikut :</p>\r\n\r\n<ol>\r\n	<li>Ruam menyebar ke satu atau kedua mata.</li>\r\n	<li>Ruam akan sangat merah yang menunjukkan infeksi kulit bakteri.</li>\r\n	<li>Ruam disertai dengan pusing, detak jantung yang cepat, sesak nafas, tremor, kehilangan koordinasi otot, memburuknya batuk, muntah, leher kaku, demam tinggi.</li>\r\n	<li>Bayi berusia kurang dari enam bulan.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Faktor Resiko Cacar Air</strong><br />\r\nCacar air disebabkan oleh virus&nbsp;<em>varicella-zooster</em>&nbsp;sangat menular dan dapat menyebar dengan cepat. Virus ini ditularkan melalui kontak langsung dengan ruam atau tetesan yang tersebar ke udara melalui batuk atau bersin. Faktor yang dapat meningkatkan terjadinya cacar air adalah :</p>\r\n\r\n<ol>\r\n	<li>Tidak pernah menderita cacar air.</li>\r\n	<li>Tidak pernah mendapatkan vaksin untuk cacar air.</li>\r\n	<li>Bekerja atau sekolah dimana terdapat orang yang menderita cacar air.</li>\r\n	<li>Hidup bersama dengan anak kecil.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Terapi dan Pengobatan Cacar Air</strong><br />\r\nPengobatan yang makin cepat dimulai sejak munculnya bintik merah akan memberikan manfaat berikut kepada penderitanya:</p>\r\n\r\n<ol>\r\n	<li>Masa penyembuhan lebih cepat</li>\r\n	<li>Jumlah luka/ bintik merah lebih sedikit</li>\r\n	<li>Luas permukaan kulit tempat munculnya luka/ bintik merah lebih kecil</li>\r\n	<li>Demam yang muncul lebih ringan</li>\r\n	<li>Rasa lemah dan hilang nafsu makan berkurang.</li>\r\n</ol>\r\n\r\n<p>Oleh karena itu segeralah berkonsultasi dengan dokter untuk mendapatkan penanganan medis yang sesuai.Pendapat yang mengatakan bahwa pengobatan sebaiknya dimulai setelah bintik merah keluar tidak dapat diterima secara medis karena hal tersebut akan menimbulkan resiko:</p>\r\n\r\n<ol>\r\n	<li>Kerusakan yang disebabkan oleh virus terhadap kulit akan jauh meluas dan parah</li>\r\n	<li>Masa penyembuhan jadi lebih lama</li>\r\n	<li>Kemungkinan komplikasi infeksi oleh bakteri lebih mungkin terjadi &ndash; bernanah.</li>\r\n</ol>\r\n\r\n<p>Selain itu, selama sedang menderita cacar air, beberapa hal yang dapat dilakukan untuk mempercepat kesembuhan yaitu:</p>\r\n\r\n<ol>\r\n	<li>Sedapat mungkin jangan menggaruk bintik-bintik merah: garukan dapat memperlambat proses penyembuhan luka, menyebabkan bekas luka dan meningkatkan resiko luka menjadi terinfeksi. Untuk mengurangi iritasi ketika anak-anak menderita chickenpox:</li>\r\n</ol>\r\n\r\n<ul>\r\n	<li>Potong kuku mereka hingga pendek</li>\r\n	<li>Kenakan sarung tangan ketika mereka tidur.</li>\r\n</ul>\r\n\r\n<ol>\r\n	<li>Mandi dengan air dingin sehari 3x dapat mengurangi rasa gatal dan bagi anak-anak juga memberi pengalih perhatian. Anjuran lama yang mengatakan bahwa mandu akan membuat penyebaran virus yang lebih luas tidak dapat diterima karena virus dibawa oleh darah ke seluruh tubuh sehingga pemerahan dapat muncul dimana saja &ndash; dengan atau tanpa mandi.</li>\r\n	<li>Mandi air hangat juga membantu menurunkan demam (lebih efektif dibandingkan mengompres).</li>\r\n	<li>Gunakan lotion untuk mengurangi rasa gatal. Bentuk sediaan lotion lebih baik dibandingkan krim karena umumnya permukaan tubuh yang gatal cukup luas.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Pencegahan Cacar Air</strong><br />\r\nBerikut adalah cara untuk mencegah tertular virus cacar air :</p>\r\n\r\n<ol>\r\n	<li>Melakukan vaksin untuk virus cacar air.</li>\r\n	<li>Menghindari teman atau keluarga yang sedang menderita cacar air.</li>\r\n	<li>Meningkatkan ketahanan tubuh dengan mengkonsumsi makanan sehat dan suplemen untuk meningkatkan sistem kekebalan tubuh</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Mitos dan Fakta Cacar Air</strong></p>\r\n\r\n<ol>\r\n	<li>Mitos : penderita cacar air dilarang mandi.<br />\r\n	Fakta : penderita cacar air tetap harus menjaga kebersihan kuit dengan mandi agar bakteri dan kuman tidka tersimpan dalam kulit.<br />\r\n	&nbsp;</li>\r\n	<li>Mitos : mandi dengan air yang ditaburi tepung maizena dapat mengurangi infeksi kuman dan membuat kulit tetap sehat pada penderita cacar air.<br />\r\n	Fakta : mandi menggunakan air hangat dan menggunakn sabun antiseptik lebih efektif untuk mengurangi resiko infeksi kuman karena cacar air.<br />\r\n	&nbsp;</li>\r\n	<li>Mitos : cacar air hanya terjadi sekali seumur hidup.<br />\r\n	Fakta : umumnya seseorang hanya satu kali terkena cacar air karena tubuh sudah membentuk sistem kekebalan untuk melawan virus cacar air, namun pada beberapa orang yang memiliki sistem kekebaan tubuh rendah cacar air dapat menyerang untuk yang kedua kalinya.</li>\r\n</ol>\r\n\r\n<p>Sumber :</p>\r\n\r\n<ol>\r\n	<li><a href=\"http://patient.info/health/chickenpox-in-adults-and-teenagers\" target=\"_blank\">http://patient.info/health/chickenpox-in-adults-and-teenagers</a></li>\r\n	<li><a href=\"http://www.mayoclinic.org/diseases-conditions/chickenpox/symptoms-causes/dxc-20191277\" target=\"_blank\">http://www.mayoclinic.org/diseases-conditions/chickenpox/symptoms-causes/dxc-20191277</a></li>\r\n</ol>', NULL, '@adminhtc_cacar-air-chickenpox-4508786', 1, 37, '2023-06-19 21:33:48', '2023-06-19 21:33:48'),
(5, 'INFLUENZA', 'Influenza atau Flu adalah penyakit karena infeksi virus yang menyerang sistem pernafasan seperti hidung, tenggorokan, dan paru-paru.', '<p>Influenza atau Flu adalah penyakit karena infeksi virus yang menyerang sistem pernafasan seperti hidung, tenggorokan, dan paru-paru. Pada beberapa orang penyakit influenza dapat sembuh dengan sendirinya, namun pada beberapa orang yang lain dapat menimbulkan kematian karena komplikasi dari influenza. Influenza tanpa komplikasi didefinisikan dengan gejala demam, pilek, dan sakit kepala.</p>\r\n\r\n<p><strong>Lalu apa bedanya flu dan pilek?</strong><br />\r\nPilek dan flu, keduanya merupakan penyakit yang menyerang saluran pernapasan, namun keduanya memiliki penyebab dan gejala yang berbeda. Secara umum, gejala pilek lebih ringan daripada flu. Flu disebabkan oleh virus influenza, sementara serangan pilek dapat disebabkan oleh ratusan virus dan bakteri.</p>\r\n\r\n<p>Secara umum tanda dan gejala influenza antara lain</p>\r\n\r\n<ul>\r\n	<li>Demam dengan suhu diatas 380C.</li>\r\n	<li>Terasa pegal atau nyeri pada punggung, lengan, dan kaki.</li>\r\n	<li>Menggigil dan berkeringat.</li>\r\n	<li>Sakit kepala.</li>\r\n	<li>Batuk kering.</li>\r\n	<li>Badan terasa mudah lelah dan lemas.</li>\r\n	<li>Hidung tersumbat.</li>\r\n	<li>Sakit tenggorokan.<br />\r\n	&nbsp;</li>\r\n</ul>\r\n\r\n<p>Orang yang memiliki resiko tinggi komplikasi influenza adalah :</p>\r\n\r\n<ul>\r\n	<li>Anak-anak dibawah usia 5 tahun dan terutama yang berada dibawah 2 tahun.</li>\r\n	<li>Orang dewasa dengan usia diatas 65 tahun.</li>\r\n	<li>Penghuni rumah jompo.</li>\r\n	<li>Wanita yang sedang hamil.</li>\r\n	<li>Orang dengan sistem kekebalan yang lemah.</li>\r\n	<li>Orang yang memiliki riwayat penyakit kronis seperti asma, jantung, ginjal dan diabetes.</li>\r\n	<li>Orang yang mengalami kegemukan.<br />\r\n	&nbsp;</li>\r\n</ul>\r\n\r\n<p>Penularan virus influenza adalah melalui udara yang berasal dari ketika sesorang batuk, bersin atau berbicara. Udara yang terinfeksi tersebut dapat menular ke orang lain dengan media udara, barang-barang yang dipakai bersama dan kemudian berpindah ke tangan, mata, hidung atau mulut. Gejala dari infeksi virus influenza dapat langsung dirasakan atau dapat tertunda hingga 10 hari setelah terinfeksi. Anak-anak dan orang yang sistem kekebalantubuhnya lemah dapat dengan mudah tertular virus influenza.<br />\r\nBerikut beberapa faktor yang dapat meningkatkan resiko terinfeksi virus influenza :</p>\r\n\r\n<ul>\r\n	<li>Usia</li>\r\n	<li>Kondisi lingkungan</li>\r\n	<li>Sistem kekebalan tubuh yang lemah</li>\r\n	<li>Memiliki riwayat penyakit kronis</li>\r\n	<li>Kehamilan</li>\r\n	<li>Obesitas/ kegemukan</li>\r\n</ul>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Terapi dan pengobatan</strong><br />\r\nInfluenza dapat diatasi dengan meningkatkan sistem kekebalan tubuh. Selain itu beberapa hal dibawah ini akan membantu mempercepat pemulihan tubuh.</p>\r\n\r\n<ol>\r\n	<li>Berkonsultasi dengan Apoteker untuk konsumsi obat yang dapat meringankan gejala dari influenza seperti batuk, sakit kepala, dan pilek.</li>\r\n	<li>Berkonsultasi dengan dokter untuk mendapatkan obat antivirus untuk menyembuhkan infeksi.</li>\r\n	<li>Memperbanyak istirahat</li>\r\n	<li>Hentikan merokok</li>\r\n	<li>Mengkonsumsi vitamin untuk meningkatkan sistem kekebalan tubuh.</li>\r\n	<li>Memperbanyak konsumsi cairan untuk mencegah dehidrasi.<br />\r\n	&nbsp;</li>\r\n</ol>\r\n\r\n<p><strong>Perlukan mengkonsumsi antibiotik?</strong><br />\r\nAntibiotik digunakan untuk membunuh bakteri, bukan virus. Oleh karena itu dokter tidak selalu meresepkan antibiotik untuk mengatasi influenza kecuali jika influenza telah berkembang menjadi infeksi komplikasi antara virus dan bakteri.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Sumber :</p>\r\n\r\n<ol>\r\n	<li><a href=\"http://www.mayoclinic.org/diseases-conditions/flu/basics/lifestyle-home-remedies/con-20035101\">http://www.mayoclinic.org/diseases-conditions/flu/basics/lifestyle-home-remedies/con-20035101</a></li>\r\n	<li><a href=\"http://patient.info/doctor/influenza\">http://patient.info/doctor/influenza</a></li>\r\n	<li><a href=\"http://webkesehatan.com/apa-perbedaan-antara-pilek-flu/\">http://webkesehatan.com/apa-perbedaan-antara-pilek-flu/</a></li>\r\n</ol>', NULL, '@adminhtc_influenza-7800796', 1, 41, '2023-06-19 21:34:30', '2023-06-19 21:34:30'),
(6, 'ANEMIA', 'Hampir semua orang pernah mengalamai anemia. Salah satu gejalanya adalah tubuh terasa mudah lelah serta kulit berwarna pucat. Apa penyebab anemia dan bagaimana pencegahannya?', '<p>Anemia merupakan kondisi dimana tubuh tidak memiliki cukup sel darah merah yang sehat (hemoglobin) untuk membawa oksigen yang memadai ke seluruh tubuh. Hemoglobin adalah bagian utama dari sel darah merah yang mengikat oksigen. Jika terjadi penurunan jumlah sel darah merah atau hemoglobin dibawah normal maka organ atau sel-sel dalam tubuh tidak akan mendapatkan oksigen sesuai yang dibutuhkan. Hal tersebut menyebabkan anemia dapat menyebabkan tubuh menjadi mudah lelah dan lemah karena organ tidak mendapatkan apa yang dibutuhkan untuk berfungsi dengan baik.</p>\r\n\r\n<p><strong>Gejala Anemia</strong><br />\r\nAnemia memiliki tanda dan gejala seperti :</p>\r\n\r\n<ol>\r\n	<li>Mudah mengalami lemah letih lesu.</li>\r\n	<li>Kulit pucat atau berwarna kuning.</li>\r\n	<li>Detak jantung tidak teratur.</li>\r\n	<li>Mengalami sesak nafas.</li>\r\n	<li>Mengalami pusing dan sakit kepala.</li>\r\n	<li>Sakit dada.</li>\r\n	<li>Tangan dan kiki terasa dingin.</li>\r\n	<li>Telinga berdenging.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Penyebab Anemia</strong><br />\r\nKekurangan sel darah merah adalah penyebab Anemia. Berikut adalah kondisi mengapa hal tersebut dapat terjadi :</p>\r\n\r\n<ol>\r\n	<li>Tubuh tidak membentuk sel darah merah sesuai yang dibuthkan oleh tubuh.</li>\r\n	<li>Pendarahan dapat menyebabkan tubuh kehilangan banyak sel darah merah.</li>\r\n	<li>Tubuh menghancurkan sel darah merah.</li>\r\n</ol>\r\n\r\n<p>Tubuh membentuk tiga jenis sel darah yaitu :</p>\r\n\r\n<ol>\r\n	<li><strong>Sel darah putih</strong>&nbsp;yang berfungsi untuk melawan bakteri dan virus.</li>\r\n	<li><strong>Trombosit</strong>&nbsp;yang berfungsi untuk membantu proses pembekuan darah ketika terjadi luka.</li>\r\n	<li><strong>Sel darah merah</strong>&nbsp;yang berfungsi untuk membawa oksigen ke seluruh tubuh.</li>\r\n</ol>\r\n\r\n<p>Sel darah dibentuk secara teratur di dalam sumsum tulang. Untuk membentuk hemoglobin dan sel darah merah, tubuh membutuhka zat besi, vitamin B12, asam folatdan nutrisi lain dari makanan yang Anda konsumsi.<br />\r\nBerikut beberapa tipe anemia berdasarkan penyebabnya :</p>\r\n\r\n<ol>\r\n	<li>Anemia karena kekurangan zat besi.<br />\r\n	Tipe ini adalah yang paling umum menjadi penyebab anemia yaitu karena kekurangan zat besi didalam tubuh. Sumsum tulang membutuhkan zat besi untuk membuat hemoglobin. Tanpa zat besi yang cukup, tubuh tidak dapat menghasilkan cukup hemoglobin untuk sel darah merah. Hal ini&nbsp; biasa terjadi pada wanita hamil dan juga disebabkan oleh kehilangan darah seperti pendarahan berat ketika menstruasi, maag, kanker dan penggunaan obat antinyeri terutama aspirin.</li>\r\n	<li>Anemia karena kekurangan vitamin.<br />\r\n	Selain zat besi tubuh membutuhkan folat dan vitamin B12 untuk menghasilkan sel darah merah yang sehat. Kekurangan folat dan vitamin B12 dapat menyebabkan penurunan produksi sel darah merah. Pada beberapa orang mengkonsumsi B12 cukup namun memiliki masalah dalam memproses vitamin didalam tubuh sehingga dapat menyebabkan anemia.</li>\r\n	<li>Anemia karena penyakit kronis.<br />\r\n	Penyakit-penyakit kronis seperti kanker, HIV/AIDS, rheumatoid arthritis, dan penyakit ginjal dapat mengganggu sel darah merah.</li>\r\n	<li>Anemia aplastic<br />\r\n	Penyakit ini langka terjadi, anemia jenis ini dapat mengancam jiwa karena tubuh tidak memproduksi sel darah merah cukup. Penyebab anemia aplastik adalah karena infeksi, obat-obatan tertentu, penyakit autoimun, paparan bahan kimia beracun.</li>\r\n	<li>Anemia karena masalah pada sumsum tulang<br />\r\n	Berbagai penyakit seperti leukemia dan mielofibrosis dapat menyebabkan anemia karena mempengaruhi produksi sel darah merah dalam sumsum tulang.</li>\r\n	<li><em>Hemolytic anemias</em><br />\r\n	<em>Hemolytic anemias</em>&nbsp;dikarenakan oleh sel darah merah hancur lebih cepat dari pembentukan sel darah merah pada sumsum tulang. Penyakit tertentu dapat mempercepat penghancuran sel darah merah.&nbsp;<em>Hemolytic anemias</em>&nbsp;dapat diturunkan melalui garis keturunan.</li>\r\n	<li><em>Sickle cell anemia</em><br />\r\n	Sel darah merah yang berbentuk yang berbentuk tidak normal seperti bulan sabit. Hal ini dapat menyebabkan sel darah merah lebih cepat hancur yang mengakibatkan kekurangan sel darah merah.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Faktor Resiko</strong><br />\r\nBerikut beberapa faktor yang dapat meningkatkan resiko terjadinya anemia :</p>\r\n\r\n<ol>\r\n	<li>Kurang asupan makanan yang mengandung vitamin B12, zat besi, folat.</li>\r\n	<li>Mengalami masalah pencernaan.</li>\r\n	<li>Menstruasi.</li>\r\n	<li>Kehamilan.</li>\r\n	<li>Penyakit kronis.</li>\r\n	<li>Faktor keturunan.</li>\r\n	<li>Faktor usia.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong>Penanganan Anemia</strong></p>\r\n\r\n<ol>\r\n	<li>Jika mengalami anemia karena kekurangan zat besi dan vitamin dapat diterapi dengan mengkonsumsi suplemen yang mengandung zat besi dan multivitamin.</li>\r\n	<li>Mengkonsumsi obat sesuai dengan rekomendasi dokter.</li>\r\n	<li>Mendapatkan tindakan transfusi darah.</li>\r\n	<li>Mengkonsumsi makanan yang mengandung vitamin dan mineral yang menunjang pembentukan sel darah merah sebagai pencegahan dan terapi anemia.<br />\r\n	-&nbsp;Zat besi : daging sapi, kacang-kacangan, sayuran berwarna hijau gelap.<br />\r\n	-&nbsp;Folat : buah-buahan, jus buah, sayuran berwarna hijau gelap, kacang-kacangan, dan makanan berasal dari gandum seperti roti, sereal, pasta dan nasi.<br />\r\n	-&nbsp;Vitamin B12 : daging sapi, produk berasal dari susu, produk berasal dari kedelai.<br />\r\n	-&nbsp;Vitamin C : buah sitrus, brokoli, tomat, melon dan strawberi.</li>\r\n</ol>\r\n\r\n<p><strong>Pencegahan Anemia</strong><br />\r\nAnemia dapat dicegah dengan beberapa hal berikut</p>\r\n\r\n<ol>\r\n	<li>Tingkatkan asupan makanan yang banyak mengandung zat besi.<br />\r\n	Sumber makanan yang banyak mengandung zat besi adalah daging, ikan, kacang-kacangan, labu, sayur-sayuran hijau.</li>\r\n	<li>Konsumsi makanan yang dapat meningkatkan produksi sel darah merah seperti tomat, pisang, papaya, wortel.</li>\r\n	<li>Batasi dan kurangi asupan makanan dan minuman yang dapat memperlambat penyerapan zat besi seperti kopi dan teh yang mengandung kafein.</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Sumber :</p>\r\n\r\n<ol>\r\n	<li><a href=\"http://www.mayoclinic.org/diseases-conditions/anemia/manage/ptc-20183235\" target=\"_blank\">http://www.mayoclinic.org/diseases-conditions/anemia/manage/ptc-20183235</a></li>\r\n</ol>', NULL, '@adminhtc_anemia-3460951', 1, 46, '2023-06-19 21:35:26', '2023-06-19 21:35:26');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `type_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `type_id`, `created_at`, `updated_at`) VALUES
(1, 'Absans (Lena)', 'absans-lena', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(2, 'Abses Gigi', 'abses-gigi', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(3, 'Abses Peritonsil', 'abses-peritonsil', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(4, 'Abses Telinga (Abses Bezold)', 'abses-telinga-bezold', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(5, 'Acne Vulgaris (Jerawat)', 'acne-vulgaris-jerawat', 2, '2023-06-19 17:00:00', '2023-06-19 21:21:07'),
(6, 'Acquired Immunodeficiency Syndrome (AIDS/HIV)', 'acquired-imunodeficiency-syndrome-aids-hiv', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(7, 'Sindrom Koroner Akut (Acute Coronary Syndrome)', 'acute-coronary-syndrome-sindrom-koroner-akut', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(8, 'Adenoiditis (Radang Kelenjar Adenoid)', 'adenoiditis-radang-kelenjar-adenoid', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(9, 'Alergi', 'alergi', 2, '2023-06-19 17:00:00', '2023-06-19 21:20:29'),
(10, 'Penyakit Alzheimer (Alzheimer\'s Disease)', 'penyakit-alzheimer-alzheimers-disease', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(11, 'Amiloidosis (Amyloidosis)', 'amiloidosis-amyloidosis', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(12, 'Abses Anal (Anal Abscess)', 'abses-anal-anal-abscess', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(13, 'Pelebaran Abnormal Aorta (Aneurisma Aorta)', 'pelebaran-abnormal-aorta-aneurisma-aorta', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(14, 'Serangan Jantung (Angina Pectoris)', 'serangan-jantung-angina-pectoris', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(15, 'Bengkak Pembuluh Darah Bawah Kulit (Angioedema)', 'bengkak-pembuluh-darah-bawah-kulit-angioedema', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(16, 'Anoreksia Nervosa', 'anoreksia-nervosa', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(17, 'Gangguan Irama Jantung (Aritmia)', 'gangguan-irama-jantung-aritmia', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(18, 'Arthritis Rheumatoid', 'arthritis-rheumatoid', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(19, 'Arthritis Gout (Asam Urat)', 'arthritis-gout-asam-urat', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(20, 'Asma Bronkhiale', 'asma-bronkhiale', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(21, 'Cacat Lubang Anus (Atresia Ani)', 'cacat-lubang-anus-atresia-ani', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(22, 'Autism (Autisme)', 'autism-autisme', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(23, 'Baby Blues (Postpartum Blues)', 'baby-blues-postpartum-blues', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(24, 'Batu Empedu (Gallstone)', 'batu-empedu-gallstone', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(25, 'Batu Ginjal (Kidney Stone)', 'batu-ginjal-kidney-stone', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(26, 'Batu Kandung Kemih (Vesikolitiasis)', 'batu-kandung-kemih-vesikolitiasis', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(27, 'Batu Saluran Kemih (Ureterolitiasis)', 'batu-saluran-kemih-ureterolitiasis', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(28, 'Batuk Rejan (Pertusis)', 'batuk-rejan-pertusis', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(29, 'Bayi kuning karena Menyusui (Breastmilk Jaundice)', 'bayi-kuning-karena-menyusui-breastmilk-jaundice', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(30, 'Bell\'s Palsy', 'bells-palsy', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(31, 'Bengkak di lipat paha/Bubo Inguinalis (LGV)', 'bengkak-di-lipat-paha-bubo-inguinalis-lgv', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(32, 'Benjolan kelopak mata (Kalazion)', 'benjolan-kelopak-mata-kalazion', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(33, 'Breastfeed Jaundice', 'breastfeed-jaundice', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(34, 'Bronkitis', 'bronkitis', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(35, 'Bubo Ingunalis', 'bubo-ingunalis', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(36, 'Bulimia Nervosa', 'bulimia-nervosa', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(37, 'Cacar Air (Varicella / Chickenpox)', 'cacar-air-varicella-chickenpox', 2, '2023-06-19 17:00:00', '2023-06-19 21:22:02'),
(38, 'Cacar ular (Herpes zoster)', 'cacar-ular-herpes-zoster', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(39, 'Cairan Terakumulasi di Rongga Pleura (Efusi Pleura)', 'cairan-terakumulasi-di-rongga-pleura-efusi-pleura', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(40, 'Campak (morbili)', 'campak-morbili', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(41, 'Influenza', 'influenza', 2, '2023-06-19 17:00:00', '2023-06-19 21:20:21'),
(42, 'Tuberkulosis (TBC)', 'tuberkulosis-tbc', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(43, 'Muntaber', 'muntaber', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(44, 'Tifus Pneumonia', 'tifus-pneumonia', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(45, 'Hepatitis', 'hepatitis', 13, '2023-06-19 17:00:00', '2023-06-19 21:21:18'),
(46, 'Anemia', 'anemia', 2, '2023-06-19 17:00:00', '2023-06-19 21:21:41'),
(47, 'Asam Lambung Naik (GERD)', 'asam-lambung-naik-gerd', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(48, 'Asthma (Asma)', 'asthma-asma', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(49, 'Autism Spectrum Disorder (Gangguan Spektrum Autisme)', 'autism-spectrum-disorder-gangguan-spektrum-autisme', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(50, 'Bronkitis Kronis', 'bronkitis-kronis', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(51, 'Chikungunya', 'chikungunya', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(52, 'Demam Berdarah (Dengue)', 'demam-berdarah-dengue', 2, '2023-06-19 17:00:00', '2023-06-19 21:20:09'),
(53, 'Diabetes Mellitus', 'diabetes-mellitus', 1, '2023-06-19 17:00:00', '2023-06-19 21:19:21'),
(54, 'Epilepsi', 'epilepsi', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(55, 'Gagal Ginjal', 'gagal-ginjal', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(56, 'Gagal Jantung', 'gagal-jantung', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(57, 'Hipertensi (Tekanan Darah Tinggi)', 'hipertensi-tekanan-darah-tinggi', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(58, 'Kanker Paru-paru', 'kanker-paru-paru', 11, '2023-06-19 17:00:00', '2023-06-19 21:20:46'),
(59, 'Malaria', 'malaria', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(60, 'Osteoporosis', 'osteoporosis', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(61, 'Parkinson\'s Disease (Penyakit Parkinson)', 'parkinsons-disease-penyakit-parkinson', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(62, 'Penyakit Ginjal Polikistik', 'penyakit-ginjal-polikistik', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(63, 'Radang Tenggorokan (Pharyngitis)', 'radang-tenggorokan-pharyngitis', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(64, 'Sinusitis', 'sinusitis', 14, '2023-06-19 17:00:00', '2023-06-19 17:00:00'),
(66, 'Diabetes Tipe 1', 'diabetes-tipe-1', 1, '2023-06-19 17:00:00', '2023-06-19 21:19:34'),
(67, 'Diabetes Tipe 2', 'diabetes-tipe-2', 1, '2023-06-19 17:00:00', '2023-06-19 21:19:43'),
(68, 'Diabetes Gestasional', 'diabetes-gestasional', 1, '2023-06-19 17:00:00', '2023-06-19 21:17:56'),
(69, 'Diabetes Insipidus', 'diabetes-insipidus', 1, '2023-06-19 17:00:00', '2023-06-19 21:18:07'),
(70, 'Diabetes Melitus Tipe MODY', 'diabetes-melitus-tipe-mody', 1, '2023-06-19 17:00:00', '2023-06-19 21:19:05'),
(71, 'Diabetes Melitus Tipe LADA', 'diabetes-melitus-tipe-lada', 1, '2023-06-19 17:00:00', '2023-06-19 21:18:48'),
(73, 'Unspecified', 'unspecified', 14, '2023-06-20 04:17:01', NULL),
(74, 'Gaya Hidup', 'gaya-hidup', 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `discussions`
--

CREATE TABLE `discussions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` enum('Published','Deleted') NOT NULL,
  `author_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discussions`
--

INSERT INTO `discussions` (`id`, `title`, `content`, `slug`, `status`, `author_id`, `category_id`, `created_at`, `updated_at`) VALUES
(1, 'Kram', 'Kenapa ya saya sering mengalami kram seluruh badan?', '@said_kram-1912965', 'Published', 2, 74, '2023-06-19 21:38:23', '2023-06-19 21:38:23'),
(3, 'Mata Merah', 'Dok, saya sering mata merah dan ada kotorannya. Kira-kira bisa diberikan obat apa ya yang aman?', '@rafi_mata-merah-9724857', 'Published', 3, 74, '2023-06-19 21:50:46', '2023-06-19 21:50:46');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_06_14_124203_create_roles_table', 1),
(6, '2023_06_14_124531_add_role_id_column_to_users_table', 1),
(7, '2023_06_14_124655_create_specialists_table', 1),
(8, '2023_06_14_124835_add_specialist_id_column_to_users_table', 1),
(9, '2023_06_14_125311_create_parent_types_table', 1),
(10, '2023_06_14_125312_create_categories_table', 1),
(11, '2023_06_14_130526_create_discussions_table', 1),
(12, '2023_06_14_131543_create_responses_table', 1),
(13, '2023_06_14_132138_create_articles_table', 1),
(14, '2023_06_14_132621_create_votes_table', 1),
(15, '2023_06_14_132946_create_vote_responses_table', 1),
(16, '2023_06_14_133101_create_report_discussions_table', 1),
(17, '2023_06_14_133154_create_report_responses_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `parent_types`
--

CREATE TABLE `parent_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `parent_types`
--

INSERT INTO `parent_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Diabetes', NULL, NULL),
(2, 'General Health', NULL, NULL),
(3, 'Healthy Living', NULL, NULL),
(4, 'Women\'s Health', NULL, NULL),
(5, 'Men\'s Health', NULL, NULL),
(6, 'Mental Health', NULL, NULL),
(7, 'Heart', NULL, NULL),
(8, 'Lung & Respiratory Disorders', NULL, NULL),
(9, 'Sleep Disorders', NULL, NULL),
(10, 'Children\'s Health', NULL, NULL),
(11, 'Cancer', NULL, NULL),
(12, 'Digestive\r\n', NULL, NULL),
(13, 'Hepatitis', NULL, NULL),
(14, 'Unspecified', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report_discussions`
--

CREATE TABLE `report_discussions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `content` text NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `discussion_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_discussions`
--

INSERT INTO `report_discussions` (`id`, `content`, `user_id`, `discussion_id`, `created_at`, `updated_at`) VALUES
(1, 'tes report', 2, 1, '2023-06-19 21:54:16', '2023-06-19 21:54:16');

-- --------------------------------------------------------

--
-- Table structure for table `report_responses`
--

CREATE TABLE `report_responses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `content` text NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `response_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_responses`
--

INSERT INTO `report_responses` (`id`, `content`, `user_id`, `response_id`, `created_at`, `updated_at`) VALUES
(1, 'tes report', 2, 4, '2023-06-19 21:54:32', '2023-06-19 21:54:32');

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `content` text NOT NULL,
  `status` enum('Published','Deleted') NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `discussion_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`id`, `content`, `status`, `parent_id`, `user_id`, `discussion_id`, `created_at`, `updated_at`) VALUES
(1, 'Kram pada tubuh bisa disebabkan oleh beberapa hal, antara lain kekurangan vitamin tertentu, gangguan elektrolit (garam-garaman tubuh), posisi bekerja yang terlalu lama, dan sebagainya. Perlu dievaluasi posisi kram tersebut, apakah selalu sama atau berpindah-pindah. Perbaiki beberapa hal dasar yang dapat membantu kram tersebut, seperti konsumsi berbagai macam makanan bergizi, berolahraga rutin dengan diawali stretching, dan istirahat yang cukup. Semoga bermanfaat.', 'Published', NULL, 4, 1, '2023-06-19 21:39:17', '2023-06-19 21:39:17'),
(2, 'kram di seluruh badan agak ngeri juga yaa kak.. lebih baik cek langsung biar dpt penanganan tepat', 'Published', NULL, 3, 1, '2023-06-19 21:40:03', '2023-06-19 21:40:03'),
(3, 'Baik dok, terimakasih sarannya', 'Published', 1, 2, 1, '2023-06-19 21:41:01', '2023-06-19 21:41:01'),
(4, 'terimakasih sarannya', 'Published', 2, 2, 1, '2023-06-19 21:41:17', '2023-06-19 21:41:17'),
(5, 'Halo Bapak,utk mengatasi mata merah tergantung penyebabnya,apakah infeksi (konjungtivitis,cepat sekali menular), mata kering, alergi, mata lelah (terlalu lama kontak dg layar gadget, adanya cedera tertentu atau berkaitan dg kondisi medis lainnya. Langkah awal baiknya dibersihkan dl dg air mengalir ,atau diberikan obat tetes mata yg dijual bebas yaitu yg mengandung naphazoline,tetrahydrozoline,atau air mata buatan. Apabila belum membaik sebaiknya diperiksakan ya Pak,agar bisa terdiagnosis lebih akurat.', 'Published', NULL, 5, 3, '2023-06-19 21:51:38', '2023-06-19 21:51:38'),
(6, 'terimakasih dok sarannya', 'Published', 5, 3, 3, '2023-06-19 21:52:27', '2023-06-19 21:52:27'),
(7, 'terimakasih dok', 'Published', 5, 6, 3, '2023-06-19 21:53:12', '2023-06-19 21:53:12');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', '2023-06-19 19:51:08', '2023-06-19 19:51:08'),
(2, 'User', '2023-06-19 19:51:08', '2023-06-19 19:51:08'),
(3, 'Doctor', '2023-06-19 19:51:08', '2023-06-19 19:51:08');

-- --------------------------------------------------------

--
-- Table structure for table `specialists`
--

CREATE TABLE `specialists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `gelar` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `specialists`
--

INSERT INTO `specialists` (`id`, `name`, `gelar`, `created_at`, `updated_at`) VALUES
(1, 'User', '-', NULL, NULL),
(2, 'Umum', '-', NULL, NULL),
(3, 'Anak', 'Sp.A', NULL, NULL),
(4, 'Anestesiologi dan Reanimasi', 'Sp.An', NULL, NULL),
(5, 'Andrologi', 'Sp.And', NULL, NULL),
(6, 'Akupunktur Klinik', 'Sp.Ak', NULL, NULL),
(7, 'Bedah', 'Sp.B', NULL, NULL),
(8, 'Bedah Anak', 'Sp.BA', NULL, NULL),
(9, 'Bedah Mulut dan Maksilofasial (Dokter gigi)', 'Sp.BM', '2023-06-19 20:01:04', '2023-06-19 20:01:04'),
(10, 'Bedah Toraks Kardiovaskuler', 'Sp.BTKV', '2023-06-19 20:01:45', '2023-06-19 20:01:45'),
(11, 'Bedah Plastik', 'Sp.BP', '2023-06-19 20:02:35', '2023-06-19 20:02:35'),
(12, 'Bedah Saraf', 'Sp.BS', NULL, NULL),
(13, 'Kedaruratan Medik', 'Sp.KM', NULL, NULL),
(14, 'Kedokteran Forensik & Medikolegal', 'Sp.F', NULL, NULL),
(15, 'Farmakologi Klinik', 'Sp.FK', NULL, NULL),
(16, 'Gizi Klinik', 'Sp.GK', NULL, NULL),
(17, 'Jantung dan Pembuluh Darah', 'Sp.JP', NULL, NULL),
(18, 'Konservasi Gigi (Dokter Gigi)', 'Sp.KG', NULL, NULL),
(19, 'Kedokteran Gigi Anak (Dokter Gigi)', 'Sp.KGA', NULL, NULL),
(20, 'Kedokteran Jiwa atau Psikiatri', 'Sp.KJ', NULL, NULL),
(21, 'Kedokteran Penerbangan', 'Sp.KP', NULL, NULL),
(22, 'Penyakit Kulit dan Kelamin', 'Sp.KK', NULL, NULL),
(23, 'Kedokteran Nuklir', 'Sp.KN', NULL, NULL),
(24, 'Kedokteran Olahraga', 'Sp.KO', NULL, NULL),
(25, 'Mata', 'Sp.M', NULL, NULL),
(26, 'Mikrobiologi Klinik', 'Sp.MK', NULL, NULL),
(27, 'Obstetri & Ginekologi (Kebidanan dan Kandungan)', 'Sp.OG', NULL, NULL),
(28, 'Kedokteran Okupasi (Kerja)', 'Sp.Ok', NULL, NULL),
(29, 'Onkologi Radiasi', 'Sp.Onk.Rad', NULL, NULL),
(30, 'Ortodonsia (Perawatan Maloklusi) (Dokter Gigi)', 'Sp.Ort', NULL, NULL),
(31, 'Bedah Orthopaedi dan Traumatologi', 'Sp.OT', NULL, NULL),
(32, 'Paru (Pulmonologi)', 'Sp.P', NULL, NULL),
(33, 'Parasitologi Klinik', 'Sp.ParK', NULL, NULL),
(34, 'Periodonsia (Jaringan Gusi dan Penyangga Gigi) (Dokter Gigi)', 'Sp.Perio', NULL, NULL),
(35, 'Patologi Anatomi', 'Sp.PA', NULL, NULL),
(36, 'Penyakit Dalam', 'Sp.PD', NULL, NULL),
(37, 'Patologi Klinik', 'Sp.PK', NULL, NULL),
(38, 'Penyakit Mulut (Dokter Gigi)', 'Sp.PM', NULL, NULL),
(39, 'Prostodonsia (Restorasi Rongga Mulut) (Dokter Gigi)', 'Sp.Pros', NULL, NULL),
(40, 'Radiologi', 'Sp.Rad', NULL, NULL),
(41, 'Rehabilitasi Medik', 'Sp.RM', NULL, NULL),
(42, 'Radiologi Kedokteran Gigi (Dokter Gigi)', 'Sp.RKG', NULL, NULL),
(43, 'Saraf', 'Sp.S', NULL, NULL),
(44, 'Telinga Hidung Tenggorok-Bedah Kepala Leher', 'Sp.THT-KL', NULL, NULL),
(45, 'Urologi', 'Sp.U', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `about` text DEFAULT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `specialist_id` bigint(20) UNSIGNED NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `email`, `email_verified_at`, `image`, `bio`, `about`, `role_id`, `specialist_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin HTC', '@adminhtc', '$2y$10$eg2DEPliCkpxCdSzGIS5wOmEQyPBiR.XsCp1E0YbvIPx.z5sWIoH2', 'adminhtc@gmail.com', NULL, NULL, NULL, NULL, 1, 1, NULL, '2023-06-19 20:39:20', '2023-06-19 20:39:20'),
(2, 'Said Muhammad Mazaya', '@said', '$2y$10$Q/G8nPpJnLY1IJAk.AttW.I3EGrtgOnrtsFUuBJ3URNltnDL4NbKS', 'said@gmail.com', NULL, NULL, NULL, NULL, 2, 1, NULL, '2023-06-19 21:23:49', '2023-06-19 21:23:49'),
(3, 'M Rafi Devari Hasibuan', '@rafi', '$2y$10$qbkZiwmo/DFRw/rwJkY62.x.6zigyCVmezyn9ffRGtZ96GAG7.Pby', 'rafi@gmail.com', NULL, NULL, NULL, NULL, 2, 1, NULL, '2023-06-19 21:24:33', '2023-06-19 21:24:33'),
(4, 'Said', '@said1', '$2y$10$wGfV/KsBuZlpIXijBiTveuZCq4A0Z.55pVTBzY3KqgDDIzpQ6WZye', 'said1@gmail.com', NULL, NULL, NULL, NULL, 3, 31, NULL, '2023-06-19 21:25:21', '2023-06-19 21:27:11'),
(5, 'Rafi Dokter', '@rafi1', '$2y$10$ErDuhGKZQjk6ECaYagWy3.rLlU6AwtF8vTkV4CdJAOuQH1/qVoLoK', 'rafi1@gmail.com', NULL, NULL, NULL, NULL, 3, 36, NULL, '2023-06-19 21:26:11', '2023-06-19 21:30:28'),
(6, 'Ibra Rizqy Siregar', '@ibra', '$2y$10$d5wFsrAt37Izf2sFBODidOHYx5Q6BRTZ/gbybldee57b4AhQQbfOu', 'ibra@gmail.com', NULL, NULL, NULL, NULL, 2, 1, NULL, '2023-06-19 21:45:17', '2023-06-19 21:45:17');

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('Upvote','Downvote') NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `discussion_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `votes`
--

INSERT INTO `votes` (`id`, `type`, `user_id`, `discussion_id`, `created_at`, `updated_at`) VALUES
(1, 'Upvote', 4, 1, '2023-06-19 21:39:02', '2023-06-19 21:39:02'),
(2, 'Upvote', 3, 1, '2023-06-19 21:40:12', '2023-06-19 21:40:12');

-- --------------------------------------------------------

--
-- Table structure for table `vote_responses`
--

CREATE TABLE `vote_responses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` enum('Upvote','Downvote') NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `response_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vote_responses`
--

INSERT INTO `vote_responses` (`id`, `type`, `user_id`, `response_id`, `created_at`, `updated_at`) VALUES
(1, 'Upvote', 3, 1, '2023-06-19 21:40:17', '2023-06-19 21:40:17'),
(2, 'Upvote', 5, 5, '2023-06-19 21:51:49', '2023-06-19 21:51:49'),
(4, 'Upvote', 6, 7, '2023-06-19 21:53:21', '2023-06-19 21:53:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `articles_slug_unique` (`slug`),
  ADD KEY `articles_author_id_foreign` (`author_id`),
  ADD KEY `articles_category_id_foreign` (`category_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`),
  ADD KEY `categories_type_id_foreign` (`type_id`);

--
-- Indexes for table `discussions`
--
ALTER TABLE `discussions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `discussions_slug_unique` (`slug`),
  ADD KEY `discussions_author_id_foreign` (`author_id`),
  ADD KEY `discussions_category_id_foreign` (`category_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parent_types`
--
ALTER TABLE `parent_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `report_discussions`
--
ALTER TABLE `report_discussions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `report_discussions_user_id_foreign` (`user_id`),
  ADD KEY `report_discussions_discussion_id_foreign` (`discussion_id`);

--
-- Indexes for table `report_responses`
--
ALTER TABLE `report_responses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `report_responses_user_id_foreign` (`user_id`),
  ADD KEY `report_responses_response_id_foreign` (`response_id`);

--
-- Indexes for table `responses`
--
ALTER TABLE `responses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `responses_parent_id_foreign` (`parent_id`),
  ADD KEY `responses_user_id_foreign` (`user_id`),
  ADD KEY `responses_discussion_id_foreign` (`discussion_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specialists`
--
ALTER TABLE `specialists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`),
  ADD KEY `users_specialist_id_foreign` (`specialist_id`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `votes_user_id_foreign` (`user_id`),
  ADD KEY `votes_discussion_id_foreign` (`discussion_id`);

--
-- Indexes for table `vote_responses`
--
ALTER TABLE `vote_responses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vote_responses_user_id_foreign` (`user_id`),
  ADD KEY `vote_responses_response_id_foreign` (`response_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `discussions`
--
ALTER TABLE `discussions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `parent_types`
--
ALTER TABLE `parent_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `report_discussions`
--
ALTER TABLE `report_discussions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `report_responses`
--
ALTER TABLE `report_responses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `responses`
--
ALTER TABLE `responses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `specialists`
--
ALTER TABLE `specialists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vote_responses`
--
ALTER TABLE `vote_responses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `articles_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_type_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `parent_types` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `discussions`
--
ALTER TABLE `discussions`
  ADD CONSTRAINT `discussions_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `discussions_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `report_discussions`
--
ALTER TABLE `report_discussions`
  ADD CONSTRAINT `report_discussions_discussion_id_foreign` FOREIGN KEY (`discussion_id`) REFERENCES `discussions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `report_discussions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `report_responses`
--
ALTER TABLE `report_responses`
  ADD CONSTRAINT `report_responses_response_id_foreign` FOREIGN KEY (`response_id`) REFERENCES `responses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `report_responses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `responses`
--
ALTER TABLE `responses`
  ADD CONSTRAINT `responses_discussion_id_foreign` FOREIGN KEY (`discussion_id`) REFERENCES `discussions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `responses_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `responses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `responses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `users_specialist_id_foreign` FOREIGN KEY (`specialist_id`) REFERENCES `specialists` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `votes`
--
ALTER TABLE `votes`
  ADD CONSTRAINT `votes_discussion_id_foreign` FOREIGN KEY (`discussion_id`) REFERENCES `discussions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `votes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `vote_responses`
--
ALTER TABLE `vote_responses`
  ADD CONSTRAINT `vote_responses_response_id_foreign` FOREIGN KEY (`response_id`) REFERENCES `responses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `vote_responses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
