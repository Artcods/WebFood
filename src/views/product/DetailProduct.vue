<!-- Setup perlu didefinisikan didalam router -->


<template>

  <div>

    <h1>Detail Page</h1>
    <div id="image-wrap">
      <div>
        <img :src="product.image" alt="">
      </div>

      <div id="product-detail">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp.{{ product.price }}</h3>
        <p>Quantity : {{ product.quantity }}</p>
        <button id="add-to-card">Cart</button>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>

</template>

<script>

import { products } from '@/data-seed';

export default {
  data() {
    return {
      products
    }
  },
  /* Cara mengatasinya dengan menggunakan computed supaya dapat memanipulasi */
  /* computed berfungsi untuk mengubah suatu data yang sudah ada ke format yang baru (memanipulasi datanya) */
  computed: {
    product() {

      /* Mengarahkan data dengan menggunakan method find (data tersebut akan mengecek) ... */
      return this.products.find((x) => {
        /* Apakah nilai id sama dengan parameter, nilai parameter diambil dari $route untuk mendapatkan (:id) didalam path disertakan params */

        return x.id === this.$route.params.id
      })
    }
  },
  mounted() {
    /* lifecycle mounted menampilkan sesuai jumlah mentah-mentah yaitu 20 tidak sesuai yang kita pilih */
    // console.log(this.products) // ini salah karena tidak sesuai keinginan kita

    // memanggil dari memanipulasi data dari computed
    console.log(this.product)
  }
}
</script>

<style scoped>

  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    margin-top: 20px;
  }

  #image-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-detail {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100px;
  }

  #price {
    top: 24px;
    right: 10px;
  }

  h3 {
    text-align: center;
  }
</style>