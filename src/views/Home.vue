<template>
  <div class="wrapper">
    <div class="intro-box">
      <div class="box-content">



        <h1>Hello! I'm Daniel J Ramirez,</h1>
        <h1>Welcome to my little website!</h1>
        <div>
          <span v-b-hover="handleHover">Add 1</span>
          <p>The text above has been hovered {{ counter}} times.</p>

        </div>
        <div class="social-container">
          <a href="https://github.com/djr52" target="_blank"><img class="icon-img" :src="github"></a>
          <a href="https://www.linkedin.com/in/daniel-ramirez-993ab81a0/" target="_blank"><img class="icon-img" :src="linkedIn"></a>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
  import github from '../assets/github-11-64.png';
  import linkedIn from '../assets/linkedin-logo-60.png'

    export default {
        name: "Home",
      data(){
          return {
            github: github,
            linkedIn: linkedIn,
            counter: 0,
          }

      },
      methods:{
        handleHover(hovered){
          if(hovered){
            this.counter = 1
          }
          else{
            this.counter = 0;
          }

        }
      }
    }
</script>

<style>
  /*
  Temp font
   */
  .intro-box{
    background-color: rgba(115, 115, 115, 0.7);
    height: auto;
    width: auto;
    padding: 30px;

    border: 1px solid white;
    border-radius: 15px;
  }
  .box-content{
    text-align: center;
  }
  .home-logo{
    padding: 20px;
  }
  .social-container{

    padding: 10px;

    width: 70%;
    background-color: rgba(0, 0, 0, 0.6);

    margin: 0 auto;
    border-radius: 10px;
  }
  .icon-img{
    height: 50px;
    width: 50px;
    padding: 3px;
    border: 1px solid white;
    border-radius: 10px;
  }
  a{
    padding-left: 10px;
  }

</style>
