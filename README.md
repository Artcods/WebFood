Berikut adalah template **README.md** yang siap Anda salin dan gunakan:

```markdown
# Vue.js Project

## Project Setup

### 1. Install Dependencies
Untuk memulai, Anda perlu menginstal semua dependensi yang diperlukan untuk proyek Vue.js ini. Jalankan perintah berikut di terminal untuk menginstalnya:

```bash
npm install
```

### 2. Menjalankan Proyek di Mode Pengembangan
Setelah berhasil menginstal dependensi, Anda dapat menjalankan aplikasi dalam mode pengembangan dengan perintah berikut:

```bash
npm run serve
```

Perintah ini akan memulai server lokal dan memungkinkan Anda untuk melihat aplikasi di browser dengan mengunjungi `http://localhost:8080`.

### 3. Membangun Proyek untuk Produksi
Jika Anda sudah siap untuk mempublikasikan aplikasi ke server, Anda dapat membangun proyek untuk produksi menggunakan perintah berikut:

```bash
npm run build
```

Perintah ini akan menghasilkan berkas statis yang siap diunggah ke server untuk produksi.

### 4. Linting dan Memperbaiki File
Untuk memastikan kode Anda bebas dari kesalahan sintaksis dan mengikuti pedoman pemformatan, Anda dapat menjalankan perintah berikut untuk melakukan linting dan memperbaiki file:

```bash
npm run lint
```

Ini akan menganalisis kode dan memberikan rekomendasi perbaikan otomatis jika memungkinkan.

---

Untuk menambahkan data di atas ke MongoDB, Anda bisa menggunakan MongoDB shell, atau menggunakan alat seperti MongoDB Compass atau Mongoose (jika menggunakan Node.js). Berikut adalah cara melakukannya dengan menggunakan MongoDB shell:

### 1. **Masuk ke MongoDB Shell**
   Jalankan MongoDB shell dengan mengetikkan perintah berikut di terminal:

   ```bash
   mongo
   ```

### 2. **Pilih Database yang Tepat**
   Pilih database yang akan digunakan. Jika database belum ada, MongoDB akan membuatnya secara otomatis saat data pertama kali dimasukkan:

   ```bash
   use yourDatabaseName
   ```

   Gantilah `yourDatabaseName` dengan nama database yang ingin Anda gunakan.

### 3. **Masukkan Data ke Koleksi**
   Gunakan perintah `insertMany()` untuk menambahkan data ke koleksi. Misalnya, jika koleksi Anda bernama `products`, Anda dapat menggunakan perintah berikut:

   ```javascript
   db.products.insertMany([
     {
       code: '1',
       name: 'Chicken Karage',
       price: 30000,
       image: 'img/Photo 1.jpg',
       description: 'Delicious and crispy Japanese-style fried chicken.',
       quantity: 100
     },
     {
       code: '2',
       name: 'Burger',
       price: 45000,
       image: 'img/Photo 2.jpg',
       description: 'Juicy beef burger with fresh lettuce, tomato, and cheese.',
       quantity: 100
     },
     {
       code: '3',
       name: 'Fries',
       price: 20000,
       image: 'img/Photo 3.jpg',
       description: 'Golden and crispy French fries, perfect as a snack or side dish.',
       quantity: 75
     }
   ]);
   ```

### 4. **Verifikasi Data**
   Setelah memasukkan data, Anda bisa memverifikasi bahwa data sudah masuk dengan perintah berikut:

   ```javascript
   db.products.find().pretty();
   ```

   Perintah ini akan menampilkan semua dokumen di koleksi `products` dengan format yang lebih rapi.

---