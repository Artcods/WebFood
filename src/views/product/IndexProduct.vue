<!-- Setup perlu didefinisikan didalam router -->

<template>
  <div>
    <h1>Home Product</h1>

    <div class="page-wrap">
      <!-- Menampilkan semua produk -->
      <div class="grid-wrap">
        <!-- buat props lalu diisi dengan data products -->
         <!--  Membuat props di componentsnya untuk mengirimkan data dari product ke components -->
        <ProductItemComponent v-for="product in products" :key="product.id" 
        :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>

/* Mengambil data product dari file seed */
import { products } from '../../data-seed'
import ProductItemComponent from '../../components/ProductItem.vue'

/* Mengenalkannya pada data di export default */
export default {
  data() {
    return {
      products,
    }
  },
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