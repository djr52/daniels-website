<template>
<!---
TODO
- Refactor code to make it professional looking, efficient, and nice
  - Globalized necessary stylings and fix some html classes and IDs, DONT REPEAT YOURSELF (Maybe use SCSS?)
  - Separate some modeling/data scripts into other files, and import it
  - Separate other necessary code, styling and put it into its own file

- Start working on content for About, Contact pages and potentially add a Projects page (Lets finish this site up first)
  - Remove hello world page
  - Add skills page

- Continue making the website look responsive and nice looking
  - Try to fix the particlesJS component so it is interactive and NOT blocked by the App div

--->
  <div id="app">
    <particlesJS></particlesJS>
    <transition name="router-anim" enter-active-class="animated fadeInRight" leave-active-class="fadeOutRight">
      <router-view/>
    </transition>

    <Navbar></Navbar>




  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  import particlesJS from './components/ParticlesJS'

  import HelloWorld from "./views/HelloWorld";
  import Home from "./views/Home";
  import About from "./views/About";
  import Contact from "./views/Contact";
  import Resume from "./views/Resume";
  import Skills from "./views/Skills";


export default {
  name: 'app',
  components:{
    particlesJS
    ,Navbar
    ,Home
    ,HelloWorld
    ,About
    ,Contact
    ,Resume
    ,Skills

  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App, this is a test'
    }
  }
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.7.2";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #FFFFFF;
  width: 100%;
  height: 100%;
  position: absolute;

}
body{
  background-color: black;

}

</style>
