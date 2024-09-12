<!-- Setup perlu didefinisikan didalam router -->

<template>
  <div>
    <h1>Home Product</h1>

    <div class="page-wrap">
      <!-- Menampilkan semua produk -->
      <div class="grid-wrap">

        
        <!-- buat props lalu diisi dengan data products -->
        <!--  Membuat props di componentsnya untuk mengirimkan data dari product ke components -->
        <ProductItemComponent v-for="Dataproduct in products" :key="Dataproduct.id" 
        :productProps="Dataproduct"/>


      </div>
    </div>
  </div>
</template>

<script>

/* Mengambil data product dari file seed */
/* import { products } from '../../data-seed' */

/* untuk memanggil data dari database */
import axios from 'axios';
/* Mengimport component ProductItem */
import ProductItemComponent from '../../components/ProductItem.vue'

/* Mengenalkannya pada data di export default */
export default {
  data() {
    return {
      products: [], // data didapatkan dari endpoint dari axios
    }
  },
  /* pada saat memanggil proses fetch belum selesai */
  async created() {
    /* testing API */
    /* const response = await axios.get('http://localhost:8000/api/products');
    console.log(response.data); */ // cek apakah request berhasil

    // Ambil data product dari API
    try {
    const response = await axios.get('http://localhost:8000/api/products');
    // Periksa data yang diterima
    this.products = response.data; // Simpan data ke data products
    } catch (error) {
    console.error(error); // Tangani error jika ada
    }
  },
  /* Mencantumkan components supaya dikenal oleh file ini */
  components: {
    ProductItemComponent
  }
}
</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>