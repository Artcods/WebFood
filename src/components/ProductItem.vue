<template>
    <!-- Membuat tampilan item product kemudian dibuat didalam component untuk digunakan oleh indexproduct -->
    <div class="product-item">
        <img :src="productProps.image" alt="">
        <h2 class="product-name">{{ productProps.name }}</h2>
        <p class="product-price">Rp.{{ productProps.price }}</p>

        <!-- Membuat Link untuk button menuju ke detail (menambahkan property params yang berisikan id) -->
        <router-link :to="{ name: 'detail', params: { id: productProps.id } }">
            <button>Detail Page</button>
        </router-link>
    </div>
</template>

<script>
export default {
    props: [
      'productProps' // Menerima product sebagai props
    ]
}
</script>

<style scoped>
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