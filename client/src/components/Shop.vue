<template>
  <div>
    <h1 class="text-center mt-3">Our Products</h1>
    <div class="card-columns m-5">
      <div class="card p-3" v-for="product in products" :key="product.id">
          <div class="card-img-top">
            <img :src="product.image" alt="image">
          </div>
          <div class="card-body card-text text-left">
            <strong class="text-dark lead">
              {{ product.name }}
            </strong><br>
            <b>
              {{ product.description}}
            </b>
          </div>
          <h5 class="text-small mr-3 float-right">{{ product.price | currency }}</h5>
          <button class="btn ml-3 float-left" @click="addToCart(product)">Add Item </button>
      </div>
      <div class="card p-3" v-for="item in items" :key="item.id">
        <div class="card-img-top">
          <img :src="item.image" alt="image" width="300vw">
        </div>
        <div class="card-body card-text text-left">
          <strong class="text-dark lead">
            {{ item.name }}
          </strong><br>
          <b>
            {{ item.description}}
          </b>
        </div>
        <h5 class="text-small mr-3 float-right">{{ item.price | currency }}</h5>
        <button class="btn ml-3 float-left" @click="addToCart(product)">Add Item </button>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Store } from '../store/store';
import { BASE_URL, getHeaders } from '../utils';

export default {
  data() {
    return {
      products: Store.$data.products,
      items: Store.$data.items
    };
  },
  methods: {
    addToCart(product) {
      Store.addToCart(product);
      // method for sending mail and sms
      axios
        .get(`${BASE_URL}/send`, getHeaders)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      console.log(Store.addToCart());
    }
  },
  filters: {
    currency: function(value) {
      return '‎₦' + parseFloat(value);
    }
  }
};
</script>

<style scoped>
img {
  width: 40vh;
}
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

