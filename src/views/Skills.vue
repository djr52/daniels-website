<template>
  <div  id="skillWrapper">

    <div>

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

<style scoped>
  #skillWrapper{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #skillList li{
    list-style: none;
    display: inline;
    float: left;
  }
  #skillBox{
    display: block;
    width: 50%;


    text-align: center;

    border: 1px solid white;

  }

</style>
