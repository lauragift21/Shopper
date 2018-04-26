<template>
<div class="home">
    <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">
        <img src="../assets/logo.png" alt="logo" width="100px">
      </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">Manage Product</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <!-- Search and language to be iterated later -->
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-navbar-nav>
          <router-link :to="{ name: 'login' }">
            <b-nav-item href="/login">Login </b-nav-item>
          </router-link>
          <router-link :to="{ name: 'signup' }">
            <b-nav-item href="/signup">Sign Up</b-nav-item>
          </router-link>
          <router-view/>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <Hero/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue';
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';

export default {
  name: 'home',
  components: {
    Hero,
    Login,
    SignUp
  }
};
</script>
