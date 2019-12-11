<template>
  <div id="tab-bar">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  text-align: center;
  height: 49px;
  background-color: #eee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 14px;
}

</style>