<template>
  <div id="app">
    <div class="bar">
      <nav class="navbar navbar-expand-sm navbar-dark bg-info">
      <a class="navbar-brand" href="#">
        <img src="./assets/logo.png" alt="logo" height="40px">
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
              <a class="nav-link" href="#/shop" v-if="false">Manage Products</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <button class="nav-link btn bg-white" href="#" v-if="false">
               <a class="text-dark"> Cart </a>
               <img src="./assets/cart.png" width="20px" alt="cart">
              </button>
            </li>
            <li class="nav-item">
              <router-link to="/login"
                class="nav-link"
                v-if="true">
                Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login"
                class="nav-link"
                v-if="false">
                Logout
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register"
                class="nav-link"
                v-if="true">
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
import EventBus from './event-bus';

export default {
  name: 'home',
  components: {
    Login,
    SignUp
  },
  // created() {
  //   if (isAuthenticated) {
  //     this.authenticated = true;
  //   } else {
  //     this.authenticated = false;
  //   }
  // },
  // created() {
  //   EventBus.$on('logged', () => {
  //     this.isLogged = this.isAuthenticated();
  //   });
  // },
  // methods: {
  //   isAuthenticated() {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       return true
  //     }
  //     return false;
  //   }
  // }
};
</script>

<style>
#app {
  font-family: 'Ubuntu';
  font-weight: 300;
}
</style>

