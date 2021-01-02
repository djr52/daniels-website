<template>
  <div>
    <!--Navbar now fixed to top of the screen using the 'fixed' attribute-->
    <b-navbar class="header" fixed="top" toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand class="spacing"><Avatar></Avatar></b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>


          <router-link class="route-text lead text-light" v-for="routes in links"
                       v-bind:key="routes.id"
                       :to="`${routes.page}`">
            <div id="navCont">
                               <span :class="{highlight:routes.text === selected, anim:routes.text === selected}"
                                     @click="selected = routes.text" class="navBarItem">{{routes.text}}</span>
            </div>
   </router-link>
          <!--GET ANIMATIONS TO WORK WITH SPECIFIC HOVERS and/or CLICKS-->



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
            selected: undefined,
            links:[

              {
                id: 0,
                text: 'Home',
                page: '/',
              },
              {
                id: 1,
                text: 'About',
                page: '/About'
              },
              {
                id: 2,
                text: 'Skills',
                page: '/Skills'
              },
              {
                id: 3,
                text: 'Resume',
                page: '/Resume'
              },
              {
                id: 4,
                text: 'Contact',
                page: '/Contact'
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
