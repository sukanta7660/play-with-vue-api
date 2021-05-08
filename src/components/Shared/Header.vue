<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">{{ siteName }}</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active" exact=""
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/about"
              class="nav-link"
              exact
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/posts"
              class="nav-link"
              exact
              >API Post</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              to="/todo-app"
              class="nav-link"
              exact
              >To-Do App</router-link
            >
          </li>
          <li class="nav-item" v-if="loginStatus">
            <router-link
              active-class="active"
              to="#"
              class="nav-link"
              exact
              >{{ getAuth() }}</router-link
            >
          </li>
          <li class="nav-item" v-if="loginStatus">
            <a href="#"
              class="nav-link"
              @click.prevent="Logout()"
              >Logout</a
            >
          </li>
          <li class="nav-item" v-if="!loginStatus">
            <router-link
              active-class="active"
              to="/login"
              class="nav-link"
              exact
              >Login</router-link
            >
          </li>
          <li class="nav-item" v-if="!loginStatus">
            <router-link
              active-class="active"
              to="/register"
              class="nav-link"
              exact
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props : {
    loginStatuses : {
      required : false,
      default : false
    }
  },
  
  data() {
    return {
      siteName: "Sukanta Purkayastha",
      loggedIn : localStorage.getItem('isLoggedIn') || false
    };
  },
  computed : {
    loginStatus : {
      set(item){
        this.loggedIn = item
      },
      get(){
        return this.loggedIn
      }
    }
  },
  
  methods: {
    Logout(){
      this.$set(this, 'loggedIn', false);
      localStorage.removeItem('isLoggedIn')
      this.$alert({messages : 'You are successfully logged out'})
    },
    getAuth() {
      return localStorage.user;
     
    },
  },
  watch  :{
    loginStatuses : {
      handler(val){
        this.loggedIn = val
      },
      deep : true,
      immediate : true
    }
  }
};
</script>
<style scoped>
</style>