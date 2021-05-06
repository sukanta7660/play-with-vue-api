<template>
  <div id="app">
    <Header/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/Shared/Header.vue";
import Footer from "@/components/Shared/Footer.vue";
export default {
  components:{
    Header,
    Footer
  },
}
</script>
<style>

</style>
