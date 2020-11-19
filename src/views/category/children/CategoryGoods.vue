<template>
	<div class="category-goods">
		<!-- <grid-view :cols="3" :lineSpace="15" :v-margin="20"> -->
		<div class="menu-list-item" v-for="(item, index) in goods" :key="index">
			<a href="#">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
		<!-- </grid-view> -->

	</div>

</template>

<script>
	// import GridView from 'components/common/gridview/GridView'

	export default {
		name: 'CategoryGoods',
		components: {
			// GridView
		},
		props: {
			goods: {
				type: Array,
				default () {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	/* .menu-list-item {
	  text-align: center;
	  font-size: 12px;
	}
	
	.menu-list-item img {
	  width: 80%;
	}
	
	.menu-list-item div {
	  margin-top: 15px;
	} */
	.category-goods {
		display: flex;
		flex-wrap: wrap;
		/* width: 70%; */
		padding: 20px 8px;
		font-size: 12px;
		text-align: center;
	}

	.menu-list-item {
		flex: 1;
		margin: 0 8px 15px 0;
	}

	.menu-list-item img {
		width: 50px;
		margin-bottom: 15px;
	}
</style>
