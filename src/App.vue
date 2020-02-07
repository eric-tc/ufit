<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12" >


      <header-app></header-app>
      
      <router-view></router-view>

      </div>

    </div>


  </div>
</template>

<script>
import Header from './component/Header.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{

    HeaderApp:Header
  }
}
</script>

<style>

</style>
