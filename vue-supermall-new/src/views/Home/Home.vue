<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swiper :banner="banner" />

    <!-- 推荐 -->
    <recommend-view :recommend="recommend" />

    <tab-control class="tab-control" :titles="titles" />

    <ul>
      <li v-for="item in 300">{{item}}</li>
    </ul>
  </div>
</template> 

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import {getHomeMultidata} from 'network/home'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl
  },
  data() {
    return {
      path: "/home/news",
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      titles: ["流行", "精选", "新款"],
      goods: {
        pop: {page: 0, list: []},
        news: {page: 0, list: []},
        sell: {page: 0, list: []},
      }
    };
  },
  created() {
    console.log("home created");

    getHomeMultidata().then((res) => {
      console.log('数据===', res)
      this.banner = res.data.banner.list
      this.dKeyword = res.data.dKeyword.list
      this.keywords = res.data.banner.list
      this.recommend = res.data.recommend.list
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
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>