<template>
  <div id="app">
    <router-view></router-view>
    <vfooter></vfooter>
  </div>
</template>

<script  type="text/ecmascript-6">
  import  vfooter from './components/footer/footer.vue';
export default {
  name: 'app',
  components:{
    vfooter
  }
}
</script>

<style>
  @import "./common/css/common.css";
</style>
