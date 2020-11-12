<template>
	<div class="shopcart-list-item" v-if="Object.keys(product).length !== 0">
		<div class="check-box">
			<check-button :isChecked="product.checked"
			@click.native="checkClick"/>
		</div>
		
		<div class="item-img">
			<img :src="product.img" alt="商品图片">
		</div>
		
		<div class="item-info">
			<div class="item-title">{{product.title}}</div>
			<div class="item-desc">{{product.desc}}</div>
			
			<div class="item-other">
				<div class="item-price">￥{{product.price}}</div>
				<div class="item-count">x{{product.count}}</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import CheckButton from 'components/content/checkbutton/CheckButton'
	
	export default {
		name: 'ShopcartListItem',
		components: {
			CheckButton
		},
		props: {
			product: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			checkClick() {
				this.product.checked = !this.product.checked
			}
		}
	}
</script>

<style scoped>
	.shopcart-list-item {
		display: flex;
		height: 20vh;
		border-bottom: 1px solid #aaa;
	}
	.check-box {
		padding-top: 8vh;
	}
	.item-img img {
		height: 16vh;
		border-radius: 5px;
		margin: 2vh 3px;
	}
	.item-info {
		width: 70vw;
		padding: 2vh 5px;
	}
	.item-title, 
	.item-desc {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.item-title {
		font-weight: 600;
		margin-bottom: 3vh;
	}
	.item-desc {
		font-size: 14px;
	}
	.item-other {
		display: flex;
		margin-top: 3vh;
	}
	.item-price {
		flex: 1;
		color: var(--color-high-text);
	}
	.item-count {
		flex: 1;
		text-align: right;
	}
</style>
