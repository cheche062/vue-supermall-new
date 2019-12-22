<template>
  <div class="recommend">
    <div v-for="item in recommend" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="" srcset="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script> 
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  padding: 10px 0 30px;
}

.recommend .item{
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
}

.recommend .item img{
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

</style>