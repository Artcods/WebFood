<!-- Setup perlu didefinisikan didalam router -->

<template>
  <div>
    <h1>Home Product</h1>

    <div class="grid-warp">
      <!-- Menampilkan semua produk -->
      <div v-for="product in products" :key="product.id" class="product-item">
      <img :src="product.image" alt="">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">Rp.{{ product.price }}</p>

        <!-- Membuat Link untuk button menuju ke detail (menambahkan property params yang berisikan id) -->
        <router-link :to="{ name: 'detail', params :{id: product.id} }">
          <button>Detail Page</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

/* Mengambil data product dari file seed */
import { products } from '../../data-seed'

/* Mengenalkannya pada data di export default */
export default {
  data() {
    return {
      products
    }
  }
}
</script>

<style scoped>
  .grid-warp {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
  }

  .product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 140px;
    width: 200px;
    border-radius: 5px;
  }

  a {
    width: 100%;
  }

  button {
    align-items: center;
    width: 50%;
  }
</style>