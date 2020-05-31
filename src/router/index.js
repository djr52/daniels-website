import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import HelloWorld from "../views/HelloWorld";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }

  ]

})


