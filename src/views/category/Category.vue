<template>
	<div id="category">
		<category-nav-bar />

		<div class="category-content">
			<category-menu-list :category="categoryLeft" @itemClick="itemClick"/>

			<scroll class="goods-content" ref="scroll">
				<category-goods :goods="showSubcategory"/>
				<tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick"/>
				<goods-list :goods="showSubDetail"/>

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
				categoryLeft: [],
				categoryRight: [],
				currentIndex: -1,
				currentType: 'pop'
			}
		},
		computed: {
			showSubcategory() {
				//不写if，报错 'subcategories' of undefined 
				if (this.currentIndex === -1) return []
				return this.categoryRight[this.currentIndex].subcategories
			},
			showSubDetail() {
				if (this.currentIndex === -1) return []
				return this.categoryRight[this.currentIndex].categoryDetail[this.currentType]
			}
		},
		created() {
			this.getCategory()
		},

		methods: {
			getCategory() {
				getCategory().then(res => {
					// console.log(res)
					this.categoryLeft = res.data.category.list
					// console.log(this.categoryLeft)
				
					// 初始化每个类别的子数据
					for (let i = 0; i < this.categoryLeft.length; i++) {
					  this.categoryRight[i] = {
					    subcategories: [],
					    categoryDetail: {
					      'pop': [], 
					      'new': [],
					      'sell': []
					    }
					  }
					}
					// 请求第一个子分类的数据
					this.getSubcategory(0)
				})
			},
			getSubcategory(index) {
				const maitKey = this.categoryLeft[index].maitKey;
				this.currentIndex = index;
				getSubcategory(maitKey).then(res => {
					// console.log(res)
					this.categoryRight[index].subcategories = res.data.list
					this.categoryRight = {...this.categoryRight}
					this.getCategoryDetail('pop')
					this.getCategoryDetail('new')
					this.getCategoryDetail('sell')
				})
			},
			getCategoryDetail(type) {
				const miniWallkey = this.categoryLeft[this.currentIndex].miniWallkey
				getCategoryDetail(miniWallkey, type).then(res => {
					// console.log(res)
					this.categoryRight[this.currentIndex].categoryDetail[type] = res
					this.categoryRight = {...this.categoryRight}
				})
			},
			
			itemClick(index) {
				this.getSubcategory(index)
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
