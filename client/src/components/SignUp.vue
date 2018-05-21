<template>
  <div class="register">
    <b-form>
      <b-form-group id="name"
        label="Username:"
        label-for="Username">
        <b-form-input id="username"
          type="text"
          v-model="username"
          required
          placeholder="Enter username">
        </b-form-input>
      </b-form-group>
      <b-form-group id="email"
        label="Your Email:"
        label-for="email">
        <b-form-input id="email"
          type="email"
          v-model="email"
          required
          placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="password"
        label="Password:"
        label-for="password">
      <b-form-input id="password"
        type="password"
        v-model="password"
        required
        placeholder="Enter password">
      </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="dark">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  }
};
</script>

<style scoped>
.register {
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


<!-- b-form-1.vue -->