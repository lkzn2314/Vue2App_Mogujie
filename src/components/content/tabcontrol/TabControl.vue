<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
      :class="{active: currentIndex == index}" 
      class="tab-control-item" @click="tabClick(index)">
      <div>{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index
        //子传父
        this.$emit('tabClick', index)
      }
    }

  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 30px;
    background-color: var(--color-background);
    text-align: center;
    font-size: 14px;
    z-index: 999;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item div{
    width: 36px;
    margin: 0 auto;
  }
  .active {
    color: var(--color-high-text);
  }
  .active div {
    border-bottom: 2px solid var(--color-tint);
  }
</style>
