import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import Shop from "./components/Shop.vue";

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
      component: Shop,
      // TODO: make the shop a protected route
      // beforeEnter: (to, from, next) => {
      //   // console.log('user is authenticated');
      //   next('/login')
      // }
    },
    {
      path: '/cart',
      name: 'cart',
      // component: 'Cart'
    }
  ]
});
