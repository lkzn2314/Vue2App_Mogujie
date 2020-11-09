<template>
	<div class="detail-bottom-bar">
		<div class="bar-left">
			<div class="item ">
				<i class="icon service"></i>
				<span>客服</span>
			</div>
			<div class="item ">
				<i class="icon shop"></i>
				<span>店铺</span>
			</div>
			<div class="item ">
				<i class="icon collect"></i>
				<span>收藏</span>
			</div>
		</div>
		
		<div class="bar-right">
			<div class="cart" @click="addToCart">加入购物车</div>
			<div class="buy">购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailBottomBar',
		methods: {
			addToCart() {
				this.$emit('addToCart')
			}
		}
	}
</script>

<style scoped>
	.detail-bottom-bar {
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 49px;
		z-index: 10;
		font-size: 13px;
		text-align: center;
	}
	.bar-left {
		display: flex;
		flex: 1;
		background-color: #fff;
	}
	.item {
		flex: 1;
	}
	.icon {
		display: block;
		width: 22px;
		height: 22px;
		background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;/*background-size */
		margin: 5px auto 3px;
	}
	.service {
		background-position: 0 -54px;
	}
	.shop {
		background-position: 0 -99px;
	}
	.bar-right {
		display: flex;
		flex: 1;
	}
	.bar-right div {
		flex: 1;
		line-height: 49px;
	}
	.cart {
		background-color: #ffe817;
		
	}
	.buy {
		background-color: #FB7299;
		color: #fff;
	}
</style>
