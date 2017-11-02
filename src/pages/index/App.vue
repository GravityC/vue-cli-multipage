<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <div>
      {{msg}}
    </div>
    <div>
      <a href="home.html">{{to}}</a>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msg: 'this is index',
        to: 'to home'
      }
    }
  }
</script>
<style>
</style>
