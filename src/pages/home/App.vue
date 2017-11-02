<template>
  <div id="app">
    {{msg}}
    <hello-vue></hello-vue>
    <div>
      <a href="index.html">{{to}}</a>
    </div>
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
