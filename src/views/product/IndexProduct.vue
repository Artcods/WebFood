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
import { products } from '../../data-seed'

/* Mengimport component ProductItem */
import ProductItemComponent from '../../components/ProductItem.vue'

/* Mengenalkannya pada data di export default */
export default {
  data() {
    return {
      products,
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