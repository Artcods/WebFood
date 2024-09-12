<!-- Setup perlu didefinisikan didalam router -->


<template>

  <div>

    <!-- Jika ada maka tampilkan product -->
    <div id="image-wrap" v-if="product">
      <h4 v-if="notif" class="notif">Item Added</h4>
      <h1>Detail Page</h1>
      <div>
        <img :src="`http://localhost:8000/${product.image}`" alt="">
      </div>

      <div id="product-detail">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp.{{ product.price }}</h3>
        <p>Quantity : {{ product.quantity }}</p>
        <button id="add-to-card" @click="addToCart(product.code)">Cart</button>
        <p>{{ product.description }}</p>
      </div>
    </div>

    <NotFound v-else/>

  </div>

</template>

<script>

import axios from 'axios';
import NotFound from '../errors/ErrorNotFound.vue'

export default {
  data() {
    return {
      product: {},
      notif: false
    }
  },
  components: {
    NotFound
  },
  /* Cara mengatasinya dengan menggunakan computed supaya dapat memanipulasi */
  /* computed berfungsi untuk mengubah suatu data yang sudah ada ke format yang baru (memanipulasi datanya) */

  /* Mengarahkan data dengan menggunakan method find (data tersebut akan mengecek) ... */
  /* Apakah nilai id sama dengan parameter, nilai parameter diambil dari $route untuk mendapatkan (:id) didalam path disertakan params */
  /* computed: {
    product() {

      return this.products.find((x) => {

        return x.id === this.$route.params.id
      })
    }
  }, */
  async created() {
    /* lifecycle mounted menampilkan sesuai jumlah mentah-mentah yaitu 20 tidak sesuai yang kita pilih */
    // console.log(this.products) // ini salah karena tidak sesuai keinginan kita

    // memanggil dari memanipulasi data dari computed
    // Ambil data product dari API
    try {
    const code = this.$route.params.id
    const response = await axios.get(`http://localhost:8000/api/products/${code}`);
    // Periksa data yang diterima
    this.product = response.data; // Simpan data ke data products
    } catch (error) {
    console.error(error); // Tangani error jika ada
    }
  },
  methods: {
    async addToCart(product) {
      await axios.post(`http://localhost:8000/api/order/user/1/add`, {
        /* BODY REQUEST */
        product: product
      })
      this.notif = true
      // Tambahkan product ke cart
      //...
    }
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

  .notif {
    text-align: center;
    color: white;
    background-color: #41B883;
    padding: 3%;
    border-radius: 8px;
  }
</style>