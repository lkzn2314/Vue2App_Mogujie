<template>
	<div id="shop-cart">
		<nav-bar class="nav-bar">
			<div slot="center">购物车({{cartLength}})</div>
		</nav-bar>
		
		<scroll class="content" ref="scroll">
			<shopcart-list/>
		</scroll>
		
		<shopcart-buttom-bar/>
		
	</div>
</template>
 
<script>
	import NavBar from 'components/common/navbar/NavBar'
	import Scroll from 'components/common/scroll/Scroll'
	
	import ShopcartList from './children/ShopcartList'
	import ShopcartButtomBar from './children/ShopcartButtomBar'
	
	import {mapGetters} from 'vuex'
  
	export default {
    name: 'Shopcart',
    components: {
			NavBar,
			Scroll,
			ShopcartList,
			ShopcartButtomBar
    },
		computed: {
			...mapGetters(['cartLength'])
		},
		activated() {
			this.$refs.scroll.refresh()
		}
  }
</script>

<style scoped>
	.nav-bar {
		position: relative;
		color: #fff;
		font-weight: 600;
		background-color: var(--color-tint);
		z-index: 10;
	}
	.content {
		position: fixed;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 92px;
	}
</style>
