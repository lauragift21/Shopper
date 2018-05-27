<template>
  <div>
    <h1 class="text-center mt-3">Our Products</h1>
    <div class="card-columns m-5">
      <div class="card p-3" v-for="product in products" :key="product.id">
          <div class="card-img-top">
            <img :src="product.image" alt="image" width="70%">
          </div>
          <div class="card-body card-text text-left">
            <strong class="text-dark">
              {{ product.name }}
            </strong><br>
            {{ product.description}}
          </div>
          <h5 class="text-small float-right">{{ product.price | usdollar }}</h5>
          <button class="btn float-left" @click="addToCart(product)">Add Item </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Store } from '../store/store';

export default {
  data() {
    return {
      products: Store.$data.products
    };
  },
  methods: {
    addToCart(product) {
      Store.addToCart(product);
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }
  }
};
</script>

<style scoped>
.btn {
  background-color: #fff;
  border-color: #083700;
  color: #333;
}
.btn:hover {
  background-color: #000;
  outline-color: #fff;
  color: #fff;
}
</style>

