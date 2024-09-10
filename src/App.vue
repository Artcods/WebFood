<template>
  <div id="app">
    <nav>
      <!-- Menggunakan router link untuk memanggil path dari router folder untuk menampilkan page -->

      <router-link :to="{ name: 'product' }">Product Page</router-link> |

      <router-link :to="{ name: 'detail' }">Detail Page</router-link> |

      <router-link :to="{ name: 'cart' }">Cart Page</router-link> |

    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
