<template>
  <div class="login">
    <h2 class="text-center text-info">Log In</h2>
     <form method="post" @submit.prevent="loginUser">
      <!-- <div class="alert alert-success alert-dismissible fade show" v-if="success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <b>Login successful!</b>
      </div>
      <div class="alert alert-danger alert-dismissible fade show" v-if="error">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <b>Login Failed! Please Provide correct credentials</b>
      </div> -->
      <div class="form-group">
        <label for="Username"> Username: </label>
        <input
          type="text"
          v-model="username"
          name="username"
          required
          class="form-control"
          autocomplete="foo"
          placeholder="Enter username"
          v-validate="'required'">
          <span v-if="errors.has('username')" class="text-danger">
            {{ errors.first('username') }}
          </span>
      </div>
      <div class="form-group">
        <label for="email"> Your Email: </label>
        <input
          type="email"
          autocomplete="foo"
          class="form-control"
          v-model="email"
          id="email"
          name="email"
          required
          v-validate="'required|email'"
          placeholder="Enter email address">
          <span
            v-show="errors.has('email')"
            class="text-danger">
              {{ errors.first('email') }}
          </span>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          name="password"
          type="password"
          class="form-control"
          v-model="password"
          required
          autocomplete= "foo"
          placeholder="Enter password"
          v-validate="'max:10'">
          <span v-if="errors.has('password')" class="text-danger">
            {{ errors.first('password') }}
          </span>
      </div>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import EventBus from '../event-bus';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      success: false,
      error: false
    };
  },
  methods: {
    loginUser() {
      const url = 'http://localhost:1337/login';
      axios.post(url, {
        username: this.username,
        email: this.email,
        password: this.password
      }).then(res => {
        this.success = true;
        localStorage.token = res.config.data.email;
        this.$router.replace(this.$route.query.redirect || '/shop');
        // passing event with $emit
        EventBus.$emit('logged', 'user logged');
      }).catch(err => {
        this.error = true;
        console.log(err);
      });
    }
  },
};
</script>

<style scoped>
.login {
  margin: 6vw 24vw;
}
</style>
