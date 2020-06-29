<template>
  <div class="wrapper">
    <div class="intro-box">
      <div class="box-content">
        <div class="home-logo">
          <img src="../assets/destiny-logo.png">
        </div>


        <h1>Hello! I'm Daniel J Ramirez,</h1>
        <h2>Welcome to my website!</h2>
        <div class="sm-container">
          <a href="https://github.com/djr52" target="_blank"><img class="icon-img" src="../assets/github-11-64.png"></a>
        </div>

      </div>

    </div>
  </div>

</template>

<script>

    export default {
        name: "Home"
    }
</script>

<style scoped>
  /*
  Temp font
   */
  @import url(http://fonts.googleapis.com/css?family=Oswald:400,300,700);
  .wrapper{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


  }
  .intro-box{
    background-color: rgba(115, 115, 115, 0.7);
    height: 420px;
    width: 700px;
  }
  .box-content{
    text-align: center;
  }
  .home-logo{
    padding: 20px;
  }
  .sm-container{
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    padding: 10px;

    width: 70%;
    background-color: rgba(0, 0, 0, 0.6);

    margin: 0px auto;
    border-radius: 10px;
  }
  .icon-img{
    height: 50px;
    width: 50px;
    color: #FFFFFF;
  }
  h1, h2 {

    font-family: 'Oswald', sans-serif;
    font-weight: normal;
    color: #FFFFFF;
  }


  a {
    color: #42b983;
  }
  html,
  body{
    height: 100%;
  }

</style>
