import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue'
import Vuetify from 'vuetify';
import VueSwal from 'vue-swal';
import App from './App.vue'
import router from './routes/index'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueSwal);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
