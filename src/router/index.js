import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import HelloWorld from "../views/HelloWorld";
import About from "../views/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
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
    },
    {
      path: '/About',
      name: 'About',
      component: About

    }

  ]

})


