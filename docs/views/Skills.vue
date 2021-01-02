<template>
  <div  class="wrapper">

    <div>
      <!--

        <ul id="skillList">
        <b-card-group deck>
          <li id="skillBox" v-for="skill in skillSet" :key="skill.id">
            <b-card bg-variant="dark">
              <h3>{{skill.skillTitle}}</h3>
              <p>{{skill.skills}}</p>
            </b-card>
          </li>
        </b-card-group>


        </ul>
        -->
      <b-card-group v-for="skill in skillSet" v-bind:key="skill.id" deck>
        <b-card id="skillBox"bg-variant="dark">
          <b-card-title>{{skill.skillTitle}}</b-card-title>
          <b-card-text>{{skill.skills}}</b-card-text>
        </b-card>
      </b-card-group>


    </div>

  </div>
</template>

<script>
  import {skills} from '../data/data';


    export default {

      name: "Skills",
      data(){

        return{
          skillSet: skills

        }

      }
    }
</script>

<style>

  #skillBox{

    width: auto;
    margin: 10px;

    text-align: center;

    border: 1px solid white;

  }

</style>
