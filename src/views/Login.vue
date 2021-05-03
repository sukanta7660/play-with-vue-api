<template>
   <div class="mb-5">
      <div class="row mt-5 d-flex justify-content-center">
         <div class="col-md-6">
            <form class="form-signin" @submit.prevent="userLogin" method="post">
               <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
               <p class="h3 mb-3 errors" v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error.index">{{ error }}</li>
                    </ul>
               </p>
               <label for="email" class="sr-only">Email address</label>
               <input v-model="email" type="email" id="email" class="form-control mb-4" placeholder="Email address" autofocus>
               <label for="password" class="sr-only">Password</label>
               <input v-model="password" type="password" id="password" class="form-control mb-4" placeholder="Password">
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
export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password:'',
            errors: [],
        }
    },
    methods:{
       userLogin(){
          if (this.email && this.password) {
             this.errors = [];
             this.$http.post('https://todoapi.monobol.com/api/login/',{email:this.email,password:this.password}).then((response) => {
                  console.log(response);
                  this.$alert({messages : 'Login Successfull'})
               }).catch((er) => {
                  console.log(er);
                  this.$alert({type : 'error',messages : 'This credentials not matched with our records'})
               })
          }else {
             this.errors = [];
             if (!this.email) {
                this.errors.push('Email required')
             }
             if (!this.password) {
                this.errors.push('Password Required')
             }
          }
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
      .errors b{
          font-size: 15px;
          color: brown;
      }
      .errors ul li{
          font-size: 12px;
          color: red;
      }
      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>