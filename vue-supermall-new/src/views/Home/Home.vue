<template>
  <div>
    Home
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      path: "/home/news"
    };
  },
  created() {
    console.log("home created");
  },
  mounted() {
    console.log("home mounted");
  },
  updated() {
    // console.log('home updated')
  },
  destroyed() {
    console.log("home destroy");
  },


  
};
</script>

<style>
</style>