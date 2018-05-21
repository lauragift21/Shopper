<template>
  <div class="login">
    <b-form @submit="onSubmit">
      <b-form-group id="email"
				label="Email address:"
				label-for="email"
				description="We'll never share your email with anyone else.">
        <b-form-input id="email"
					type="email"
					v-model="form.email"
					required
					placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="password"
				label="Password:"
				label-for="password">
        <b-form-input id="password"
					type="password"
					v-model="form.password"
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
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.password = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style scoped>
.login {
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
