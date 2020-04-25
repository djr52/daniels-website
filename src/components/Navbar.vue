<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>NavBar</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="spacing" v-for="routes in links"
                     v-bind:key="routes.id"
                     :to="`${routes.page}`">{{routes.text}}</router-link>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>

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
