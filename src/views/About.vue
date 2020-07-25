<template>
  <div class="wrapper">
    <div id="aboutOne">
      <h1>
        Hello! Here's some stuff about me.
      </h1>
      <p>
        As mentioned before, my name is Daniel Ramirez! I am a student currently attending New Jersey Institute of Technology, majoring in Information Systems.
      </p>
      <p>
        The origin of my passion involves my love for computers and software, and my more recent interest of data. I love challenging myself and seeing the results of my perseverance.
      </p>
      <p>
        I wish to continue to further my experience and knowledge through my work and study!
      </p>

    </div>
    <div id="aboutTwo">
      <div class="aspects">
        <h3>Inquisitive</h3>
        <p>Whether if it's the problem itself or my own methods,
          I am always questioning to find the best solution.</p>

      </div>
      <div class="aspects">
        <h3>Persistent</h3>
        <p>I don't give up easily. In the face of challenges, I will always do my best to find a way and push through.</p>
      </div>
      <div class="aspects">
        <h3>Optimistic</h3>
        <p>The last thing I ever want to bring is negativity and doubt. Bringing positive energy and sanguine feelings is one of the many things I strive for.</p>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
  #aboutOne{
    position:relative;
    width: 50%;
    height: 50%;
    margin-right: 5%;
    top: 10%;

  }
  #aboutTwo{
    position: relative;
    height: 50%;
    width: 25%;
    top: 10%;
    margin-right: 2.5%;
  }
  .aspects{
    text-align: center;
    text-shadow: 2px 2px 4px #000000;


  }
  div p{
    font-size: large;

  }

</style>
