import Vue from 'vue';
import axios from 'axios';
import products from '../shop';
import { BASE_URL, getHeaders } from '../utils';

export const Store = new Vue({
  data() {
    return {
      products,
      cart: [],
      items: []
    };
  },
  computed: {
    totalCost() {
      return this.cart.reduce((accum, product) => {
        return accum + product.details.price * product.quantity;
      }, 0);
    }
  },
  mounted() {
    this.productList();
  },
  methods: {
    productList() {
      axios
        .get(`${BASE_URL}/products`, getHeaders)
        .then(res => {
          this.items = res.data;
        })
        /* eslint-disable */
        .catch(err => {});
    },
    addToCart(product, id) {
      const cartItem = this.cart.findIndex(p => {
        return p.details.id === product.id;
      });
      if (cartItem === -1) {
        this.cart.push({
          details: product,
          quantity: 1
        });
      } else {
        this.cart[cartItem].quantity++;
      }
    },
    removeFromCart(id) {
      const cartItem = this.cart.findIndex(p => {
        return p.details.id === id;
      });
      if (this.cart[cartItem].quantity <= 1) {
        this.cart.splice(cartItem, 1);
      } else {
        this.cart[cartItem].quantity--;
      }
    }
  }
});
