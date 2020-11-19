<template>
	<div class="category-nav-bar">
		<nav-bar>
			<div slot="center">商品分类</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	
	export default {
		name: 'CategoryNavBar',
		components: {
			NavBar
		}
	}
</script>

<style scoped>
	.category-nav-bar {
		position: relative;
		background-color: var(--color-tint);
		color: var(--color-background);
		font-weight: 600;
		z-index: 9;
	}
</style>
