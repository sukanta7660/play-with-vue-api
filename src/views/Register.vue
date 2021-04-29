<template>
   <div class="mb-5">
      <div class="row mt-5 d-flex justify-content-center">
         <div class="col-md-6">
            <form class="form-signin" @submit.prevent="saveInfo" method="post">
               <h1 class="h3 mb-3 font-weight-normal text-center">Create Your Own Profile</h1>
               <p class="h3 mb-3 errors" v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error.index">{{ error }}</li>
                    </ul>
               </p>
               <label for="name" class="sr-only">Name</label>
               <input v-model="name" type="name" id="name" class="form-control mb-4" placeholder="Enter your name.." autofocus>
               <label for="email" class="sr-only">Email address</label>
               <input v-model="email" type="email" id="email" class="form-control mb-4" placeholder="Enter your email.." autofocus>
               <label for="password" class="sr-only">Password</label>
               <input v-model="password" type="password" id="password" class="form-control mb-4" placeholder="Password">
               <label for="confirm_password" class="sr-only">Confirm Password</label>
               <input v-model="confirm_password" type="password" id="confirm_password" class="form-control mb-4" placeholder="Confirm Password">
               <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
         </div>
      </div>
   </div>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2'
export default {
    name: 'Register',
    data(){
        return{
            errors: [],
            name: '',
            email: '',
            password: '',
            confirm_password: '',
        }
    },
    methods:{
        saveInfo(){
            if (this.name && this.email && this.password && this.confirm_password && this.password == this.confirm_password) {
                this.errors = [];
                axios.post('https://todoapi.monobol.com/api/register/',{name:this.name, email:this.email,password:this.password,password_confirmation:this.confirm_password})
                    .then(() => {
                        this.name = ''
                        this.email = ''
                        this.password = ''
                        this.confirm_password = ''
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Registration Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.$router.push({path: '/login'})
                    })
                    .catch(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Something is wrong. You need to fillup the form correctly.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
            }else{
                this.errors = [];

                if (!this.name) {
                   this.errors.push('Name is Required.')
                }

                if (!this.email) {
                   this.errors.push('Email is Required.')
                }
                
                if (!this.password) {
                   this.errors.push('Password is Required.')
                }

                if (!this.confirm_password) {
                   this.errors.push('Confirmation Password is Required.')
                }

                if (this.password != this.confirm_password) {
                   this.errors.push('Password & Confirmation Password must be same.')
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