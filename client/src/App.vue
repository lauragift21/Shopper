<template>
  <div id="app">
    <div class="bar">
      <nav class="navbar navbar-expand-sm navbar-dark bg-info">
      <a class="navbar-brand" href="#">
        <img src="./assets/logo.png" alt="logo" height="50px">
      </a>
        <button class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarTogglerDemo02" class="navbar-collapse collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/shop" v-if="isAuthenticated()">Manage Products</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="text-dark" href="#/cart">
                <button class="nav-link btn bg-white mx-1 pr-3" v-if="isAuthenticated()">
                  <div class="text-dark">
                    Cart
                      <img src="./assets/cart.png" width="20px" alt="cart">
                      ({{cart()}})
                  </div>
                </button>
              </a>
            </li>
            <li class="nav-item">
              <router-link to="/login"
                class="nav-link"
                v-if="!isAuthenticated()">
                  Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login"
                class="nav-link"
                @click.native="logout()"
                v-if="isAuthenticated()">
                  Logout
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register"
                class="nav-link"
                v-if="!isAuthenticated()">
                Sign Up
              </router-link>
            </li>
          </ul>
        </div>
    </nav>
    </div>
  <router-view/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import EventBus from './store/event-bus';
import { Store } from './store/store';

export default {
  name: 'home',
  components: {
    Login,
    SignUp
  },
  data() {
    return {
      isLogged: this.isAuthenticated(),
      product: Store.$data.cart
    };
  },
  created() {
    EventBus.$on('logged', () => {
      this.isLogged = this.isAuthenticated();
    });
  },
  methods: {
    logout() {
      const removeToken = localStorage.removeItem('token');
      console.log(removeToken);
      if (removeToken) {
        return true;
      }
      return false;
    },
    removeToken() {
      return localStorage.removeItem('token');
    },
    isAuthenticated() {
      EventBus.$emit('isAuthenticated', 'user authenticated');
      const token = localStorage.getItem('token');
      if (token) {
        return true;
      }
      return false;
    },
    cart() {
      return Store.$data.cart.length;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  box-sizing: border-box;
}
a:hover {
  text-decoration: none;
}
</style>

