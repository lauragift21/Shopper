import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import Shop from './components/Shop.vue';
import Cart from './components/Cart.vue';
import Product from './components/Product.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
      // beforeEnter: (to, from, next) => {}
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    }
  ]
});
