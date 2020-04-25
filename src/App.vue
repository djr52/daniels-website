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
  //import Home from "./components/Home";
  import Navbar from "./components/Navbar";

export default {
  name: 'app',
  components:{
    particlesJS
    ,Navbar
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
  text-align: center;
  color: #FFFFFF;
  //margin-top: 60px;
}
body{
  background-color: black;
}

h1, h2 {
  font-weight: normal;
  color: #FFFFFF;
}
.intro-box{
  //display: inline-block;
  height: 300px;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  //text-align: center;

  //background-color: gray;

}
.icon-img{
  height: 50px;
  width: 50px;
  color: #FFFFFF;
}

a {
  color: #42b983;
}
</style>
