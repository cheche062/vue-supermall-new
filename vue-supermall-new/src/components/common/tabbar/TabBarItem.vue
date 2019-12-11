<template>
  <div 
    :class="{'tab-bar-item': true, isActive: isSelectIndex==index}"
    @click="handleItem"
  >
    <img v-if="isSelectIndex==index" slot="item-icon" class="img" src="~assets/img/tabs/home2.png" />
    <img v-else slot="item-icon" class="img" src="~assets/img/tabs/home1.png" />
    <span slot="item-text" class="title">{{item.title}}</span>
  </div>
</template>

<script>
export default {
  props: ["item", "index", "isSelectIndex"],
  name: "TabBarItem",
  data() {
    return {
      srcUrl: ""
    }
  },
  computed: {
    iconImg() {
      return this.isSelectIndex == this.index ? "~assets/img/tabs/home2.png" : "~assets/img/tabs/home1.png"
    }

  },
  methods: {
    handleItem() {
      this.$router.replace(this.item.path)

      this.$emit("onitemtap", this.index)
    }
  }
};
</script>


<style scoped>
.tab-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tab-bar-item.isActive {
  color: #41C95B;
}

.tab-bar-item .img {
  width: 30px;
  height: 30px;
}

.tab-bar-item .title {
}
</style>