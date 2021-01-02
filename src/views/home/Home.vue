<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    
    <tab-control :titles="['流行', '新款', '精选']"
    @tabClick="tabClick" ref="tabControl1"
    class="tabControl" v-show="isTabFixed"/>
    
    <scroll class="content" ref="scroll"
     :probe-type="3" @scroll="scrollPosition"
     :pull-up-load="true" @pullingUp="loadMore"
		 :data="goods[currentType].list">
      <home-swiper :banners="banners" 
      @swiperImgLoad="swiperImgLoad"/>
      <home-recommend :recommends="recommends"/>
      <home-feature/>
      <tab-control :titles="['流行', '新款', '精选']"
      @tabClick="tabClick" ref="tabControl2"/>
      <Goods-list :goods="goods[currentType].list"/>
    </scroll>
    
    <!-- .native监听组件根元素的原生事件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'
 
  import HomeSwiper from './childs/HomeSwiper'
  import HomeRecommend from './childs/HomeRecommend'
  import HomeFeature from './childs/HomeFeature'
  
  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import {debounce} from 'common/utils'
  
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffSetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
    },
    
    created() {
      //1.请求多个数据(轮播图与推荐)
      this.getHomeMultidata()
      
      //2.请求goods数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    
    mounted() {
      //3.监听图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on('imgLoad', () => {
        refresh()
      })
      //4.获取tabControl的offSetTop
      //所有的组件都有一个属性$el：用于获取组件中的元素
      // this.tabOffSetTop = this.$refs.tabControl.$el.offsetTop
      //获取的offsetTop不包含图片高度，此法不可取
    },
    
    methods: {
      /*
        事件监听相关方法
      */
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      backClick() {
        // this.$refs.scroll.scroll.scrollTo(0, 0, 1000) //scrollTo(x, y, timeout)
        this.$refs.scroll.scrollTo(0, 0)
      },
      scrollPosition(position) {
        //1.判断backTop是否显示
        this.isShowBackTop = (-position.y) > 1000 
        
        //2.决定tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffSetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImgLoad() {
        this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop + 40 
      },
     
      /*
        网络请求相关方法
      */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          
          //完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
      
    }
    
  }
</script>

<style scoped>
  #home {
    /* vh:视口高度 */
    height: 100vh;
    position: relative;
  } 
  .nav-bar {
    background-color: var(--color-tint);
    color: var(--color-background);
		font-weight: 600;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .tabControl {
    position: relative;
    z-index: 9;
  }
 
</style>
