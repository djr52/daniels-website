<template>
  <div class="wrapper">
    <div class="intro-box">
      <div class="box-content">



        <h1>Hello! I'm Daniel J Ramirez,</h1>
        <h1>Welcome to my little website!</h1>
        <div>
          <p>Check out my other projects/social media down below!</p>

        </div>
        <div class="social-container">
          <a href="https://github.com/djr52" target="_blank"><img class="icon-img" :src="github"></a>
          <a href="https://www.linkedin.com/in/daniel-ramirez-993ab81a0/" target="_blank"><img class="icon-img" :src="linkedIn"></a>
          <a href="https://www.instagram.com/danny.r1221/" target="_blank"><img class="icon-img" :src="instag"></a>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
  import github from '../assets/github-logo-60.png';
  import linkedIn from '../assets/linkedin-logo-60.png';
  import instag from '../assets/instagram-logo-60.png';

    export default {
        name: "Home",
      data(){
          return {
            github: github,
            linkedIn: linkedIn,
            instag: instag
          }

      }

    }
</script>

<style>

  .intro-box{
    background-color: rgba(115, 115, 115, 0.7);
    height: auto;
    width: auto;
    padding: 20px 50px;

    border-radius: 15px;
  }
  .box-content{
    text-align: center;
    text-shadow: 2px 2px 4px #000000;

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

  }


</style>
