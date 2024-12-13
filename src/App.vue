<template>
  <div id="app">
    <!-- Menggunakan router link untuk memanggil path dari router folder untuk menampilkan page -->
    <NavbarShop />
    
    <router-view/>
  </div>
</template>

<script>
import NavbarShop from './components/NavbarShop.vue';

export default {
  components: {
    NavbarShop
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#page-wrap {
  margin: auto;
  max-width: 800px;
  min-width: 100vh;
}

button {
  background-color: #ffff;
  border: none;
  border-radius: 8px;
  color: #DA292C;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: 0;
  padding: 10px;
}

/* Jumbotron Styling */
.jumbotron {
  background-color: #f8f9fa;
  padding: 50px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 90%;
}

.jumbotron-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.jumbotron-text {
  flex: 1;
  max-width: 50%;
  text-align: left;
}

.jumbotron-text h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

.jumbotron-text p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
}

.jumbotron-image {
  flex: 1;
  max-width: 50%;
  text-align: center;
}

.jumbotron-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .jumbotron-content {
    flex-direction: column;
    text-align: center;
  }

  .jumbotron-text {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .jumbotron-image {
    max-width: 100%;
  }

  .jumbotron-text h1 {
    font-size: 2rem;
  }

  .jumbotron-text p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .jumbotron-text h1 {
    font-size: 1.5rem;
  }

  .jumbotron-text p {
    font-size: 0.9rem;
  }
}
</style>
