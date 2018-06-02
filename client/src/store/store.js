import Vue from 'vue';
import axios from 'axios';
import products from '../shop';
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
  beforeCreate() {
    const url = 'http://localhost:1337/api/v1/products';
    const auth = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    };
    axios
      .get(url, auth)
      .then(res => {
        this.items = res.data;
      })
      .catch(err => {});
  },
  methods: {
    addToCart(product) {
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
