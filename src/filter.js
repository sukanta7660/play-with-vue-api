import Vue from "vue";
import moment from 'moment';

//capitalize
Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })
  
//text-limit
  Vue.filter('text_limit', function (value, size) {
    if (!value) return ''
    value = value.toString()
    if (value.length <= size) {
        return value;
      }
      return value.substr(0, size) + '...';
  })

  //date format
  Vue.filter('timeformat',(arg)=>{
    return moment(arg).format("MMM Do YYYY")
})