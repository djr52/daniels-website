import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue);


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './styles/GlobalStyles.css';


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
