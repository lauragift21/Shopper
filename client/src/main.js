import Vue from 'vue';
import VeeValidate from 'vee-validate';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

Vue.use(VeeValidate);
Vue.use(VueAxios, axios);

Vue.component('checkout', require('./components/Checkout.vue'));

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
