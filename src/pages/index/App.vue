<template>
  <div id="app">
    <img src="./static/img/test_index.png"/>
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
