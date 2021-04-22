<template>
<nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <router-link class="navbar-brand" to="/">{{ siteName }}</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active" exact="">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" to="/about" class="nav-link" exact>About</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" to="/posts" class="nav-link" exact>API Post</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" to="/todo-app" class="nav-link" exact>To-Do App</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
   data(){
       return{
           siteName: "Sukanta Purkayastha"
       }
   }
}
</script>
<style scoped>

</style>