<template>
  <div>
    <div>用户</div>
    <div>{{userId}}</div>
  
    <ul>
      <li>
        <router-link to="/user/bibibibi">新的用户</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "user",
  computed: {
    userId() {
      return this.$route.params.abc;
    }
  },

  created() {
    console.log("home created");

  }
};
</script>

<style>
</style>