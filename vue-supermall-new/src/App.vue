<template>
  <div id="app">
    <main-tabbar />

    <router-view></router-view>
  </div>
</template>
 
<script>
import MainTabbar from "components/content/mainTabbar/MainTabbar";


export default {
  name: "app",
  components: {
    MainTabbar
  }
  
};
</script>

<style>
@import "assets/css/base.css";
#app {
  height: 100%;
  position: relative;
}
</style>
