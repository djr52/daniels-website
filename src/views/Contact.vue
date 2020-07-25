<template>
  <div class="wrapper">
    <div class="contactForm">
      <h1>Feel free to contact me!</h1>
      <form id="form" action="https://getsimpleform.com/messages?form_api_token=5aa36cf964d167e80156c701e48a3364" method="post" >
        <fieldset>
          <div>
            <input type='hidden' name='redirect_to'  value='http://localhost:8080/#/Contact'>
            <input type="text" name="name" placeholder="Name" required v-model="name">
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" v-model="email">
          </div>
          <div>
            <textarea class="messageBox" type="text" name="message" required placeholder="Message" v-model="message"></textarea>
          </div>
          <div>
            <input class="submitButton" type="submit" value="Send">

          </div>


        </fieldset>
      </form>

    </div>

  </div>
</template>

<script>
  export default{
    name: 'Contact',
    data(){
      return{
        name: '',
        email: '',
        message: '',
      }

    }
  }



</script>

<style scoped>
  .contactForm #form{
    display: flex;
    flex-direction: column;
  }
  .messageBox,
  input{
    margin-bottom: 15px;
    border-radius: 3px;
    width: 100%;
  }
  .submitButton{
    width: 50%;
    background-color: black;
    color: white;
    transition: 0.2s;
  }
  .submitButton:hover{
    background-color: white;
    color: black;
    transition: 0.2s;
  }
  .messageBox{
    height: 100px;
    text-align: left;
  }

</style>
