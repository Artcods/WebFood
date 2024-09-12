<!-- Setup perlu didefinisikan didalam router -->

<template>
  <div id="page-wrap">
    <h1>shop cart Page</h1>


      <Cart v-for="Dataitem in cartItems" :key="Dataitem.id" :itemProps="Dataitem"/>

    <button id="checkout-button">Checkout</button>
    <h id="total-price">Total : {{ totalPrice }}</h>
  </div>
</template>

<script>

import axios from "axios";
import Cart from '../../components/CartItem.vue'

export default {
  data() {
    return {
      cartItems: []
    }
  },
  components: {
    Cart
  },
  computed: {
    totalPrice() {
      /* Membuat totalitems menggunakan methods reduce */
      const total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
      return total;
    }

  },
  async created() {
    try {
    // Mengambil data dari API
    const response = await axios.get('http://localhost:8000/api/order/user/1');

    // Pastikan response.data adalah array dan ambil item pertama
    const data = response.data[0]; 

    // Filter produk berdasarkan cart_items
    const filteredProducts = data.products.filter(product => data.cart_items.includes(product.code));

    // Simpan produk yang telah difilter ke cartItems
    this.cartItems = filteredProducts;

    // Periksa data yang diterima
    console.log(this.cartItems);
  } catch (error) {
    console.error(error); // Tangani error jika ada
  }
  },
}
</script>

<style scoped>
h1 {
  border-bottom: 1px solid #410883;
  margin: 0;
  margin-top: 15px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 50%;
  margin: 30px;
}
</style>