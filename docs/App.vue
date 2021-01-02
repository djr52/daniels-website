<template>
<!---
TODO
- Refactor code to make it professional looking, efficient, and nice
  - Globalized necessary stylings and fix some html classes and IDs, DONT REPEAT YOURSELF
  - Separate some modeling/data scripts into other files, and import it
  - Separate other necessary code, styling and put it into its own file

- Start working on content for About, Contact pages and potentially add a Projects page (Lets finish this site up first)

- Continue making the website look responsive and nice looking
  - Try to fix the particlesJS component so it is interactive and NOT blocked by the App div (or integrate it with a background)
  - Style up micro animations for navbar
--->
  <div id="app" >
    <particlesJS :style="bg"></particlesJS>
    <transition name="slide-left slide-right" mode="out-in">
                <!-- For Animate.css
               enter-class="animated fadeIn" enter-active-class="animated fadeInRight" enter-to-class="animated fadeOutLeft"
               leave-class="animated fadeOut" leave-active-class="animated fadeOutLeft" leave-to-class="animated fadeInRight"
               -->
      <router-view/>
    </transition>

    <Navbar></Navbar>




  </div>
</template>

<script>

  import Navbar from "./components/Navbar";
  import particlesJS from './components/ParticlesJS'

  import Home from "./views/Home";
  import About from "./views/About";
  import Contact from "./views/Contact";
  import Resume from "./views/Resume";
  import Skills from "./views/Skills";
  import bgImage from "./assets/nebula-img.jpg" ;


export default {
  name: 'app',
  components:{
    particlesJS
    ,Navbar
    ,Home
    ,About
    ,Contact
    ,Resume
    ,Skills

  },

  data () {
    //https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
    //Link above for another pretty image incase I ever want to switch back to that (Image link is a lot more colorful)
    return {
      bg: {'background-image':'url(\'' + bgImage + '\')'}
    }
  }
}
</script>

<style >

  @import url(http://fonts.googleapis.com/css?family=Oswald:400,300,700);
#app {
  font-family: 'Oswald', sans-serif;
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
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(-4em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(4em, 0);
  }
</style>
