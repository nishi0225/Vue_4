import Vue from 'vue';
import Router from 'vue-router';
import Signup from './components/signup.vue';
import Login from './components/login.vue';
import Home from './components/Home.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
  {
    path: '/',
    component: Signup
  },
  
  {
    path: '/login',
    component: Login
},

  {
    path: '/home',
    component: Home,
  }
]
})
