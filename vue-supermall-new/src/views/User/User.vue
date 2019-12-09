<template>
  <div>
    <div>用户</div>
    <div>{{userId}}</div>
  </div>
</template>

<script>
export default {
  name: 'user',
  computed: {
    userId(){
      return this.$route.params.abc
    }
  }
}
</script>

<style>

</style>