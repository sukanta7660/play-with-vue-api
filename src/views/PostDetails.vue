<template>
  <div class="about">
    <section class="jumbotron text-center">
    <div class="container">
      <h1>Single API Post</h1>
      <p class="lead text-muted">Here we are working with the api and we trying to understand the trick of the work of VUE-JS</p>
      <p>
      </p>
    </div>
  </section>
  <div class="row mb-2">
    <div class="col-md-12">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{{ post.title | capitalize }}</h3>
          <p class="card-text mb-auto">{{ post.body | capitalize }}</p>
          <router-link to="/posts">Back To Post List</router-link>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
    name: 'Posts',
    data(){
        return{
            id: this.$route.params.id,
            post: [],
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
            this.post = response.data
        })
        .catch()
    }

}
</script>
<style scoped>
main{
  margin-top: 10px;
}
.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>
