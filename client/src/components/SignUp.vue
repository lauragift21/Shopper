<template>
  <div class="register">
    <h2 class="text-center text-info">Sign Up</h2>
    <form method="post" @submit.prevent="signInUser">
      <div class="alert alert-success alert-dismissible fade show" v-if="success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <b>Registration successful!</b>
      </div>
      <div class="form-group">
        <label for="Username"> Username </label>
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
        <label for="email"> Your Email </label>
        <input
          type="email"
          autocomplete="foo"
          class="form-control"
          v-model="email"
          id="email"
          name="email"
          v-validate="'required|email'"
          placeholder="Enter email address">
          <span
            v-show="errors.has('email')"
            class="text-danger">
              {{ errors.first('email') }}
          </span>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
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
import axios from "axios";

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: false,
      success: false
    };
  },
  methods: {
    signInUser(){
      const url = 'http://localhost:1337/register';
      axios.post(url, {
        username: this.username,
        email: this.email,
        password: this.password,
      }).then(res => {
      this.success = true;
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
};
</script>

<style scoped>
.register {
   margin: 6vw 24vw;
}
</style>
