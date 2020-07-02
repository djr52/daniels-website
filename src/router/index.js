import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import HelloWorld from "../views/HelloWorld";
import About from "../views/About";
import Contact from "../views/Contact";
import Resume from "../views/Resume";

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

    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact

    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume

    }

  ]

})


