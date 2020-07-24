<template>
  <div class="wrapper">
    <div class="r-content">
      <img :src="resume">
      <div id="download-link">
        <h3>Download a<a :href="resume" download="Resume.pdf">copy</a>!</h3>
      </div>
    </div>
  </div>

</template>

<script>
  import resume from "../assets/Resume.png"

    export default {
        name: "Resume",
      data(){
          return{
            resume:resume
          }
      }
    }

</script>

<style>

  .r-content{
    height: 720px;
  }
  img
  {
    height: 100%;
  }
  #download-link{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;

  }

</style>
