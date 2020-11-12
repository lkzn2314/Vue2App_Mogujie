<template>
	<div class="cart-buttom-bar">
		<div class="select-all">
			<check-button :isChecked="isSelectAll"
			@click.native="checkClick"/>
			<span>全选</span>
		</div>
		<div class="total-price">合计:{{totalPrice}}</div>
		<div class="buy-button">去计算({{totalCount}})</div>
	</div>
</template>

<script>
	import CheckButton from 'components/content/checkbutton/CheckButton'
	
	import {mapGetters} from 'vuex'
	
	export default {
		name: 'ShopcartButtomBar',
		components: {
			CheckButton
		},
		computed: {
			...mapGetters(['cartList']),
			totalPrice() {
				return '￥' + this.cartList.filter(item => item.checked)
				.reduce((prev, item) => {
					return prev+ item.count * item.price
				}, 0).toFixed(2)
			},
			totalCount() {
				return this.cartList.filter(item => item.checked)
				.reduce((prev, item) => {
					return prev + item.count
				}, 0)
			},
			isSelectAll() {
				/* if (this.cartList.length === 0) {
					return false
				} else {
					return !this.cartList.find(item => !item.checked)
				} */
				if (this.cartList.length === 0) return false
				return !this.cartList.find(item => !item.checked)
			}
		},
		methods: {
			checkClick() {
				if (this.isChecked) {
					this.cartList.forEach(item => item.checked = false)
					this.isChecked = false
				} else {
					this.cartList.forEach(item => item.checked = true)
					this.isChecked = true
				}
			}
		}
	}
</script>

<style scoped>
	.cart-buttom-bar {
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 49px;
		height: 43px;
		background-color: #EEE;
		box-shadow: 0 2px 4px 3px rgba(100, 100, 100, .5);
		font-size: 14px;
		z-index: 8;
	}
	.select-all {
		position: relative;
		flex: 1;
		padding: 12px 0 0 5px;
	}
	.select-all span {
		position: absolute;
		left: 28px;
		top: 16px;
	}
	.total-price {
		flex: 3;
		line-height: 44px;
		font-size: 16px;
	}
	.buy-button {
		position: fixed;
		right: 0;
		width: 100px;
		background-color: #FF4500;
		text-align: center;
		line-height: 44px;
		color: #fff;
	}
</style>
