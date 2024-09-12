<template>
  <div class="product-container">
    <img :src="`http://localhost:8000/${itemProps.image}`" alt="" class="product-image">
    <div class="detail-wrap">
      <h3>{{ itemProps.name }}</h3>
      <p>{{ itemProps.price }}</p>
      <button class="remove-button">Remove</button>
    </div>
  </div>

</template>

<script>
export default {
  props: [
    'itemProps'
  ]
}
</script>

<style>

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