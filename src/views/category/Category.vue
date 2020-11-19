<template>
	<div id="category">
		<category-nav-bar />
		
		<div class="category-content">
			<category-menu-list :category="categoryInfo"
			@itemClick="itemClick" />
			
			<scroll class="goods-content" ref="scroll">
				<category-goods :goods="categoryGoods"/>
				<tab-control :titles="['综合', '新品', '销量']"
				@tabClick="tabClick"/>
				<goods-list :goods="detailGoods[currentType].list"/>
			
			</scroll>
			
		</div>
	</div>
</template>

<script>
	import CategoryNavBar from './children/CategoryNavBar'
	import CategoryMenuList from './children/CategoryMenuList'
	import CategoryGoods from './children/CategoryGoods'
	
	import GoodsList from 'components/content/goods/GoodsList'
	
	import TabControl from 'components/content/tabcontrol/TabControl'
	import Scroll from 'components/common/scroll/Scroll'

	import {
		getCategory,
		getSubcategory,
		getCategoryDetail
	} from 'network/category'

	export default {
		name: 'Category',
		components: {
			CategoryNavBar,
			CategoryMenuList,
			CategoryGoods,
			Scroll,
			TabControl,
			GoodsList
		},
		data() {
			return {
				maitKey: null,
				categoryInfo: [],
				categoryGoods: [],
				
				miniWallkey: null,
				currentType: 'pop',
				detailGoods: {
					'pop': {list: []},
					'new': {list: []},
					'sell': {list: []}
				}
			}
		},
		created() {
			this.getCategory()

			this.getSubcategory('3627')
			
			this.getCategoryDetail(10062603, 'pop')
			this.getCategoryDetail(10062603, 'new')
			this.getCategoryDetail(10062603, 'sell')
		},
		methods: {
			//左侧导航
			getCategory() {
				getCategory().then(res => {
					// console.log(res)
					this.categoryInfo = res.data.category.list
					// console.log(this.categoryInfo)
				})
			},
			
			//上侧子导航
			getSubcategory(maitKey) {
				getSubcategory(maitKey).then(res => {
					this.categoryGoods = res.data.list
					// console.log(this.categoryGoods)
				})
			},
			
			//分类详细
			getCategoryDetail(miniWallkey, type) {
				getCategoryDetail(miniWallkey, type).then(res => {
					this.detailGoods[type].list = res
				})
			},

			itemClick(index) {
				this.maitKey = this.categoryInfo[index].maitKey
				this.getSubcategory(this.maitKey)
				
				this.miniWallkey = this.categoryInfo[index].miniWallkey
				// console.log(this.miniWallkey)
				this.getCategoryDetail(this.miniWallkey, this.currentType)
			
				//点击右侧自动滚回原处
				this.$refs.scroll.scrollTo(0, 0, 200)
			},
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
				this.getCategoryDetail(this.miniWallkey, this.currentType)
			}
		}
	}
</script>

<style scoped>
	#category {
		height: 100vh;
	}
	
	.goods-content {
		position: fixed;
		right: 0;
		width: 70%;
		top: 44px;
		bottom: 49px;
	}
	
</style>
