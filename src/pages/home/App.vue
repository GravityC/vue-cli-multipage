<template>
  <div id="app">
    {{msg}}
    <hello-vue></hello-vue>
    <div>
      <a href="index.html">{{to}}</a>
    </div>
    <img src="./static/img/test_home.png">
  </div>
</template>
<script>
  import HelloVue from '../../components/HelloVue.vue'
  export default {
    data(){
      return {
        msg:'this is home',
        to:'to index',
      }
    },
    components:{
        HelloVue
    }
  }
</script>
<style>
</style>
