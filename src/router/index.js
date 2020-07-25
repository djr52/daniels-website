import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import About from "../views/About";
import Contact from "../views/Contact";
import Resume from "../views/Resume";
import Skills from "../views/Skills";

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
      path: '/Skills',
      name: 'Skills',
      component: Skills
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


