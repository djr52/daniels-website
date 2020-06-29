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
  import particlesJS from './components/ParticlesJS'
  import HelloWorld from "./views/HelloWorld";
  import Home from "./views/Home";
  import Navbar from "./components/Navbar";

export default {
  name: 'app',
  components:{
    particlesJS
    ,Navbar
    ,Home
    ,HelloWorld

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
/*
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  /* {

    transform: translateY(10px);
    opacity: 0;
  }
  */

</style>
