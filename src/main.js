import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/http'
import './plugins/alert'

//sweet alert
// import Swal from 'sweetalert2'

// filter
import filter from "@/filter.js";


Vue.config.productionTip = false

new Vue({
  router,
  filter,
  render: h => h(App)
}).$mount('#app')
