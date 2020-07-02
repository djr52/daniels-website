<template>

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
