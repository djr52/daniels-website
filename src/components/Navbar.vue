<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link class="spacing" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>


    export default {
        name: "Navbar",
        data(){
          return{
            links:[

              {
                id: 0,
                text: 'Home',
                page: '/'
              }

            ]
          }
        }
    }
</script>

<style scoped>
  h2{
    color: black;
  }
  .spacing{
    Margin-right: 10px;

  }
  div{
    background-color: #FFFFFF;
    color: black;
  }
</style>
