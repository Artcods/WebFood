<!-- Setup perlu didefinisikan didalam router -->

<template>
  <div id="page-wrap">
    <h1>shop cart Page</h1>
    <div v-for="item in cartItems" 
    :key="item.id" class="product-container">

      <img :src="item.image" alt="" class="product-image">
      <div class="detail-wrap">
        <h3>{{ item.name }}</h3>
        <p>{{ item.price }}</p>
        <button class="remove-button">Remove</button>
      </div>
    </div>
    <button id="checkout-button">Checkout</button>
    <h id="total-price">Total : {{ totalPrice }}</h>
  </div>
</template>

<script>

import { cartItems } from '@/data-seed';

export default {
  data() {
    return {
      cartItems
    }
  },
  computed: {
    totalPrice () {
      /* Membuat totalitems menggunakan methods reduce */
      const total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
      return total;
    }
    
  }
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

#product-container {
  
  align-content: center;
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 200px;
  max-width: 400px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 3;
  margin-bottom: 30px;
}
</style>