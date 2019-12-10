<template>
  <div>
    我是Profile
    {{$route.query}}
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("Profile created");
  },
  activated() {
    console.log("Profile activated");
  },

  deactivated() {
    console.log("Profile deactivated");
  }
};
</script>

<style>
</style>