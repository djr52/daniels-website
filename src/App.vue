<template>
  <div id="app">

    <particlesJS></particlesJS>
    <h3>Hello World</h3>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
  import particlesJS from './components/ParticlesJS'
export default {
  name: 'app',
  components:{particlesJS},
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
