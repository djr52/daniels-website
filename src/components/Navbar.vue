<template>
  <div class="border-bottom">
    <b-navbar class="header" fixed="top" toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand class="spacing"><Avatar></Avatar></b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav fill="true">
        <router-link class="spacing" v-for="routes in links"
                     v-bind:key="routes.id"
                     :to="`${routes.page}`">{{routes.text}}</router-link>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import Avatar from "./Avatar";


    export default {
      name: "Navbar",
      components: {Avatar},
      data(){
          return{
            links:[

              {
                id: 0,
                text: 'Home',
                page: '/'
              },
              {
                id: 1,
                text: 'HelloWorld',
                page: '/HelloWorld'
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
    Margin-right: 20px;

  }
  .header{
    border-bottom: 5px solid #FFFFFF !important;
  }

</style>
