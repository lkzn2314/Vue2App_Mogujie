<template>
	<div id="shop-cart">
		<nav-bar class="nav-bar">
			<div slot="center">购物车</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	
  export default {
    name: 'Shopcart',
    components: {
			NavBar
    }
  }
</script>

<style scoped>
	.nav-bar {
		background-color: var(--color-tint);
		color: #fff;
		font-weight: 600;
	}
</style>
