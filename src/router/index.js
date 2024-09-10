import Vue from 'vue'
import VueRouter from 'vue-router'

/* Definisikan Product */
import Product from '../views/product/IndexProduct.vue'
import Detail from '../views/product/DetailProduct.vue'

/* Definisikan ShopCart */
import Cart from '../views/shopcart/IndexCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product',
    component: Product
  },
  {
    path: '/products/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/cart',
    name: 'product',
    component: Cart
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
