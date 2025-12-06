dokumentasi projek atau tugas Pemrograman Web (A)

Dafa Kumara Sahasika (5025241112)

## Spesifikasi Proyek Website Apotek


### **1. Nama Proyek**

**ApotekCare – Sistem Manajemen dan Penjualan Obat Berbasis Web**

### **2. Deskripsi**

Website ini bertujuan untuk membantu operasional apotek, mulai dari pengelolaan stok, transaksi penjualan, katalog obat, hingga pembayaran digital. Sistem terdiri dari **Front End** untuk tampilan pengguna dan **Back End** untuk logika, data, keamanan, dan API.

### **3. Tujuan**

* Mempermudah staff dalam mengelola obat dan transaksi.
* Memberikan kemudahan bagi pelanggan untuk membeli obat secara online.
* Meningkatkan akurasi data stok dan laporan.
* Mendukung pembayaran digital melalui integrasi payment gateway.

### **4. Fitur Utama**

 **A. Front End**

  * Landing page apotek.
  * Pencarian dan katalog obat.
  * Detail obat (harga, stok, komposisi, aturan pakai).
  * Keranjang belanja dan proses checkout.
  * Registrasi dan login pelanggan.
  * Riwayat pesanan.
  * Dashboard admin dengan laporan dan tabel data.

 **B. Back End**

  * CRUD data obat.
  * CRUD kategori obat.
  * CRUD user (admin, kasir, pelanggan).
  * Manajemen stok & notifikasi stok rendah.
  * Sistem transaksi dan verifikasi pembayaran.
  * Laporan penjualan.
  * REST API untuk Front End dan Payment Gateway.

### **5. Ruang Lingkup Proyek**

 **A. Pengelolaan Data**

  * Data obat (nama, jenis, expired, stok, harga).
  * Data pelanggan.
  * Data transaksi.
  * Data supplier (opsional).
  * Data kategori obat.

 **B. Logika Bisnis**

  * Pengurangan stok otomatis setelah transaksi sukses.
  * Validasi pembelian obat tertentu (resep).
  * Sistem keranjang belanja.
  * Perhitungan total harga + biaya admin payment gateway.
  * Diskon atau aturan harga tertentu.

 **C. Autentikasi dan Security**

  * Login berbasis JWT atau session.
  * Enkripsi password (bcrypt).
  * Role-based access (admin, kasir, customer).
  * Validasi input untuk mencegah SQL injection dan XSS.
  * Proteksi API dengan token.
  * Rate limiting endpoint penting (opsional).

 **D. API**

  * API katalog obat (public).
  * API transaksi dan pesanan (protected).
  * API laporan (khusus admin).
  * API autentikasi (login, register, refresh token).
  * Callback API payment gateway (success/failed).

### **6. Rencana Implementasi**

 **Tahap 1 – Perencanaan**

  * Menentukan kebutuhan fitur.
  * Membuat user flow.
  * Menyusun wireframe.

 **Tahap 2 – Desain Sistem**

  * Merancang database (tabel obat, user, transaksi, dll).
  * Menentukan arsitektur (REST API / MVC).
  * Memilih teknologi.

 **Tahap 3 – Pengembangan Back End**

  * Pembuatan struktur API.
  * Implementasi autentikasi & otorisasi.
  * Modul CRUD dan manajemen stok.
  * Modul transaksi dan integrasi payment gateway.

 **Tahap 4 – Pengembangan Front End**

  * Membuat tampilan responsif.
  * Implementasi katalog, keranjang, dan checkout.
  * Integrasi API.

 **Tahap 5 – Pengujian**

  * Pengujian fungsional.
  * Pengujian API.
  * Pengujian UI/UX dan responsif.
  * Perbaikan bug.

 **Tahap 6 – Deployment**

  * Deploy back end ke server.
  * Deploy front end (hosting/Vercel/Netlify).
  * Konfigurasi domain dan SSL.

 **Tahap 7 – Maintenance**

  * Update fitur.
  * Optimasi performa.
  * Backup data.
  * Monitoring server.

