<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'


export default {
  name: "home",
  components: {
    NavBar
  },
  data() {
    return {
      path: "/home/news"
    };
  },
  created() {
    console.log("home created");

    getHomeMultidata().then((res) => {
      console.log(res)
    })


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

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>