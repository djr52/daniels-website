<template>
  <div>
    <!--Navbar now fixed to top of the screen using the 'fixed' attribute-->
    <b-navbar class="header" fixed="top" toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand class="spacing"><Avatar></Avatar></b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav fill="true">
        <router-link class="route-text lead text-light" v-for="routes in links"
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
                text: 'Resume',
                page: '/Resume'
              },
              {
                id: 2,
                text: 'Skills',
                page: '/Skills'
              },
              {
                id: 3,
                text: 'Contact',
                page: '/Contact'
              },
              {
                id: 4,
                text: 'About',
                page: '/About'
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
  .route-text{
    Margin-right: 20px;
    font-family: Oswald;

  }
  .header{
    border-bottom: 5px solid #FFFFFF !important;
  }

</style>
