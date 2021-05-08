<template>
  <div id="app">
    <Header :loginStatuses="loginStatuses"/>
    <div class="container">
      <router-view @userLoggedIn="userLoggedIn($event)"/>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/Shared/Header.vue";
import Footer from "@/components/Shared/Footer.vue";
import appMixins from './mixins/appMixins'
export default {
  mixins : [appMixins],
  components:{
    Header,
    Footer
  },
  data : ()=>({
    logStat : localStorage.getItem('isLoggedIn') || false
  }),
  methods : {
    userLoggedIn(val){
      this.loginStatuses = val
    }
  },
  computed : {
    loginStatuses : {
      set(val){
        this.logStat = val;
      },
      get(){
        return this.logStat
      }
      
    }
  }
}
</script>
<style>

</style>
