<template>
	<div class="profile-nav-bar">
		<nav-bar>
			<div slot="center">LK商城</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	
	export default {
		name: 'ProdileNavBar',
		components: {
			NavBar
		}
	}
</script>

<style scoped>
	.profile-nav-bar {
		background-color: var(--color-tint);
		color: var(--color-background);
		font-weight: 600;
	}
	
</style>
