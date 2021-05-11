<template>
  <div class="about">
    <section class="jumbotron text-center">
    <div class="container">
      <h1>All API Posts</h1>
      <p class="lead text-muted">Here all the posts from jsonplaceholder API for learning purpose. We will work on it.</p>
      <p>
      </p>
    </div>
  </section>
  <div class="row mb-2">
    <div class="col-md-6" v-for="post in posts" :key="post.id">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0"><router-link :to="`/post-details/${post.id}`">{{ post.title | capitalize | text_limit(20) }}</router-link></h3>
          <p class="card-text mb-auto">{{ post.body | capitalize | text_limit(70) }}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
    name: 'Posts',
    data(){
        return{
            posts: [],
            errors: []
        }
    },
    created(){
        this.$http.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
            this.posts = response.data
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
