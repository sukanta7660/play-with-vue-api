import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Post from '../views/Post.vue'
import PostDetails from '../views/PostDetails.vue'
import ToDo from '../views/ToDo.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/posts',
    name: 'Post',
    component: Post
  },
  {
    path: '/post-details/:id',
    name: 'PostDetails',
    component: PostDetails
  },
  {
    path: '/todo-app',
    name: 'ToDo',
    component: ToDo
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
