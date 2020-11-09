<template>
	<div class="detail-nav-bar">
		<nav-bar>
			<div class="left" slot="left" @click="backClick">
				<img src="~assets/img/common/back.svg" alt="">
			</div>
			<div class="center" slot="center">
				<div class="item" v-for="(item, index) in titles" 
				:class="{active: currentIndex === index}" @click="itemClick(index)">
					{{item}}
				</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'

	export default {
		name: 'DetailNavBar',
		components: {
			NavBar
		},
		data() {
			return {
				titles: ['商品', '参数', '评论', '推荐'],
				currentIndex: 0
			}
		},
		methods: {
			backClick() {
				this.$router.back()
			},
			itemClick(index) {
				this.currentIndex = index
				this.$emit('themeClick', index)
			}
		}
	}
</script>

<style scoped>
	.detail-nav-bar {
		position: relative;
		background-color: var(--color-background);
		z-index: 10;
	}
	.center {
		display: flex;
	}
	.left img {
		position: relative;
		top: 5px;
	}
	.item {
		flex: 1;
		font-size: 13px;
	}
	.active {
		color: var(--color-high-text);
	}
</style>
