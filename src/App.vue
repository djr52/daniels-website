<template>
  <div id="app">
    <particlesJS></particlesJS>
    <router-view/>
    <Navbar></Navbar>

    <home></home>

  </div>
</template>

<script>
  import particlesJS from './components/ParticlesJS'
  //import HelloWorld from "./components/HelloWorld";
  import Home from "./components/Home";
  import Navbar from "./components/Navbar";

export default {
  name: 'app',
  components:{
    particlesJS
    ,Navbar
    ,Home
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App, this is a test'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #FFFFFF;
  //margin-top: 60px;
}
body{
  background-color: black;
}

</style>
