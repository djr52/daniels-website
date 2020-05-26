<template>
  <div class="intro-box">
    <img src="../assets/logo.png">
    <h2>Welcome Visitor</h2>
    <a href="https://github.com/djr52" target="_blank"><img class="icon-img" src="../assets/github-11-64.png"></a>
  </div>

</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
  .intro-box{
    text-align: center;

    height: 300px;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
  }
  .icon-img{
    height: 50px;
    width: 50px;
    color: #FFFFFF;
  }
  h1, h2 {
    font-weight: normal;
    color: #FFFFFF;
  }


  a {
    color: #42b983;
  }

</style>
