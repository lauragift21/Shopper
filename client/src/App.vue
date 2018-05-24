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
              <a class="nav-link" href="#" v-if="false">Manage Products</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" v-if="false">
               Cart
               <img src="./assets/cart.png" width="20px" alt="cart">
              </a>
            </li>
            <li class="nav-item">
              <router-link to="/login"
                class="nav-link">
                Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register"
                class="nav-link">
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

export default {
  name: 'home',
  components: {
    Login,
    SignUp
  }
};
</script>

<style>
#app {
  font-family: 'Ubuntu';
  font-weight: 300;
}
</style>

