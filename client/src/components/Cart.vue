<template>
  <div class="cart">
    <div v-if="cart.length > 0">
      <table class="table table-striped table-responsive" :data="cart">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th><img src="../assets/arrow-down-sign-to-navigate.svg" alt="" width="16px"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in detail" :key="item.id">
            <td>{{ item.details.name }}</td>
            <td>{{ item.details.description }}</td>
            <td> {{ item.details.quantity }}</td>
            <td> ‎₦{{ item.details.price  }}</td>
            <td>
              <button class="btn btn-danger ml-2" @click="removeFromCart()">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex flex-column align-items-end">
        <p class="text-center">Total Cost: {{ totalCost | currency }}</p>
        <checkout :amount="total"/>
      </div>
    </div>
    <div v-else class="text-center badge-danger">
      <i class="fa fa-warning"></i>
        Your Cart is Empty! <br>
        Fill her up!
    </div>
  </div>
</template>

<script>
import { Store } from '../store/store';
import Checkout from './Checkout.vue';

export default {
  name: 'Cart',
  components: { Checkout },
  data() {
    return {
      detail: Store.$data.cart,
      total: Store.totalCost
    };
  },
  computed: {
    cart() {
      return Store.$data.cart;
    },
    totalCost() {
      return Store.totalCost;
    }
  },
  filters: {
    currency: function(value) {
      return '‎₦' + parseFloat(value).toFixed(2);
    }
  },
  methods: {
    removeFromCart(id) {
      this.detail.splice(id, 1);
    },
    addToCart(product) {
      Store.addToCart(product);
    }
  }
};
</script>

<style scoped>
button:focus {
  outline: 0;
}
.cart {
  width: 80%;
  margin: 30px auto;
}
</style>

