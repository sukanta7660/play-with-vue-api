import Vue from 'vue'
import App from './App.vue'
import router from './router'

// filter
import filter from "./filter";

Vue.config.productionTip = false

new Vue({
  router,
  filter,
  render: h => h(App)
}).$mount('#app')
