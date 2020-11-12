<template>
	<div class="shopcart-list">
		<shopcart-list-item v-for="(item, index) in cartList"
		:key="index"
		:product="item"/>
	</div>
</template>

<script>
	import ShopcartListItem from './ShopcartListItem'
	
	import {mapGetters} from 'vuex'
	
	export default {
		name: 'ShopcartList',
		components: {
			ShopcartListItem
		},
		computed: {
			...mapGetters(['cartList'])
		}
	}
</script>

<style scoped>
	
</style>
