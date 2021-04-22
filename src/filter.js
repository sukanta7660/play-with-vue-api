import Vue from "vue";

//capitalize
Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })

  Vue.filter('text_limit', function (value, size) {
    if (!value) return ''
    value = value.toString()
    if (value.length <= size) {
        return value;
      }
      return value.substr(0, size) + '...';
  })