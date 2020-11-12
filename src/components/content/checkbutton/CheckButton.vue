<template>
	<div class="check-button" :class="{check: isChecked}">
		<img src="~assets/img/cart/tick.svg" alt="">
	</div>
</template>

<script>
	export default {
		name: 'CheckButton',
		props: {
			isChecked: {
				type: Boolean,
				default: true
			}
		}
		
	}
</script>

<style scoped>
	.check-button{
		width: 20px;
		height: 20px;
		border: 2px solid #aaa;
		border-radius: 50%;
	}
	.check {
		border-color: var(--color-tint);
		background-color: var(--color-tint);
	}
</style>
