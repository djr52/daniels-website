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
        The origin of my passion involves my love for computers and software, and my more recent interest of data. I love challenging myself and seeing the results of my persistence.
      </p>
      <p>
        I wish to continue to further my experience and knowledge through my work and study!
      </p>

    </div>
    <div id="aboutTwo">
      <div class="aspects">Curious</div>
      <div class="aspects">Persistent</div>
      <div class="aspects">Optimistic</div>

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
    width: 50%;
    border: 1px white solid;
  }
  #aboutTwo{
    position: relative;
    border: 1px white solid;
  }

</style>
