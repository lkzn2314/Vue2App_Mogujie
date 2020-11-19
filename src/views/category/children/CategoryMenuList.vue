<template>
	<scroll class="content">
		<div class="menu-list">
			<div class="menu-list-item" v-for="(item, index) in category" 
			:class="{active: currentIndex === index}" :key="index"
			@click="itemClick(index)">
				{{item.title}}
			</div>
		</div>
	</scroll>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll'
	
	export default {
		name: 'CategoryMenuList',
		components: {
			Scroll
		},
		props: {
			category: {
				type: Array,
				default() {
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
			itemClick(index) {
				this.currentIndex = index
				// console.log(this.category[index].maitKey)
				this.$emit('itemClick', index)
			}
		}
	}
</script>

<style scoped>
	.content {
		position: fixed;
		left: 0;
		top: 44px;
		bottom: 49px;
		z-index: 8;
	}
	.menu-list-item {
		width: 100px;
		height: 45px;
		line-height: 45px;
		font-size: 14px;
		text-align: center;
		background-color: #f2f2f2;
	}
	.active {
		border-left: 3px solid var(--color-high-text);
		background-color: var(--color-background);
		font-weight: 600;
		color: var(--color-high-text);
	}
</style>
