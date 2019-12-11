<template>
  <tab-bar>
    <tab-bar-item
      v-for="(item, index) in tabList"
      :key="index"
      :index="index"
      :item="item"
      :isSelectIndex="isSelectIndex"
      @onitemtap="handleItem"
    ></tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      tabList: [
        { title: "首页", icon: "", path: "/home" },
        { title: "关于", icon: "", path: "/about" },
        { title: "我的", icon: "", path: "/profile" }
      ],
      isSelectIndex: 0
    };
  },
  methods: {
    handleItem(e) {
      // console.log(e);
      this.isSelectIndex = e;
    }
  }
};
</script>

<style scoped>
</style>