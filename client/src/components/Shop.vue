<template>
  <div>
    <h1 class="text-center mt-5">SHOPPER</h1>
    <div class="card-columns mx-3">
      <div class="card mx-2" v-for="product in products"  :key="product.id">
          <div class="card-img-top">
            <img :src="product.image" alt="image">
          </div>
          <div class="card-body card-text text-center">
            <strong class="text-dark">
              {{ product.name }}
            </strong><br>
            {{ product.description}}
          </div>
          <button class="btn d-flex mx-5 btn-dark">Add to Cart </button>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../shop.json";
export default {
  data() {
    return {
      products: json
    }
  },
}
</script>
