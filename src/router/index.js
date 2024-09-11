import Vue from 'vue'
import VueRouter from 'vue-router'

/* Definisikan Product */
import Product from '../views/product/IndexProduct.vue'
import Detail from '../views/product/DetailProduct.vue'

/* Definisikan ShopCart */
import Cart from '../views/shopcart/IndexCart.vue'

/* Definisikan Not Found */
import NotFound from '../views/errors/ErrorNotFound.vue'

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
    name: 'cart',
    component: Cart
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
    // component: () => import('../views/NotFound.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
