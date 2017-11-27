<template>
  <div id="app">
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
    },
  }
</script>
<style>
</style>
