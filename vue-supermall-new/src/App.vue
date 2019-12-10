<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/' + userId" tag="button">用户</router-link>
    <!-- <router-link :to="{path: '/profile', query: {name:'cheche', age: '18'}}"> 个人档案</router-link>  -->

    <button @click="hanldeToProfile">个人档案</button>

    <keep-alive exclude=""> 
      <router-view></router-view>
    </keep-alive>

  </div>
</template>
 
<script>

export default { 
  name: 'app',
  components: {

  },
  data() {
    return {
      userId: "hahahah"
    }
  },
  methods: {
    handleHome() {
      console.log('home');
      this.$router.push('/home')
      
    },
    handleAbout() {
      window.console.log('about');
      this.$router.push('/about')
      
    },
    hanldeToProfile() {
      this.$router.push({
        path: '/profile',
        query: {
          name: "cheche062",
          age: 10
        }
      })
    }
  }  
}
</script>

<style>
/* @import "assets/css/base.css"; */





</style>
