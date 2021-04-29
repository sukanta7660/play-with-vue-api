<template>
   <div class="mb-5">
      <div class="row mt-5 d-flex justify-content-center">
         <div class="col-md-6">
            <form class="form-signin">
               <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
               <label for="email" class="sr-only">Email address</label>
               <input type="email" id="email" class="form-control mb-4" placeholder="Email address" required autofocus>
               <label for="password" class="sr-only">Password</label>
               <input type="password" id="password" class="form-control mb-4" placeholder="Password" required>
               <div class="checkbox mb-3">
                  <label>
                  <input type="checkbox" value="remember-me"> Remember me
                  </label>
               </div>
               <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
         </div>
      </div>
   </div>
</template>
<script>
var today = new Date();
var year = today.getFullYear();
export default {
    name: 'Login',
    data(){
        return{
            fullyear: year
        }
    }
}
</script>
<style scoped>
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