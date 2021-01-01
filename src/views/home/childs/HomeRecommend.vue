<template>
  <div class="home-recommend">
    <div v-for="item in recommends" class="home-recommend-item">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommends: Array
    }
  }
</script>

<style scoped>
  .home-recommend {
    display: flex;
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .home-recommend-item {
    flex: 1;
    text-align: center;
  }
  .home-recommend-item img {
    width: 68px;
    margin-bottom: 5px;
  } 
  
  
  
</style>
