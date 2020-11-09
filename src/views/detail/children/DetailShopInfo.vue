<template>
	<div class="detail-shop-info">
 		<div class="shop-header">
			<img class="shop-logo" :src="shopinfo.logo" alt="">
			<span class="shop-name">{{shopinfo.name}}</span>
		</div>
		<div class="shop-body">
			<div class="body-left">
				<span class="sells">
					<div class="snum">{{shopinfo.sells | showSells}}</div>
					<div>总销量</div>
				</span>
				<span class="count">
					<div class="snum">{{shopinfo.goodsCount}}</div>
					<div>全部宝贝</div>
				</span>
			</div>
			
			<div class="body-right">
				<table>
					<tr v-for="item in shopinfo.score">
						<td>{{item.name}}</td>
						<td class="common" :class="{better: item.isBetter}">{{item.score}}</td>
						<td class="common common2" :class="{better: item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
					</tr>
				</table>
			</div>
		</div>
		<button class="btn" disabled>进店逛逛</button>
	</div>
</template>

<script>
	export default {
		name: 'DetailShopInfo',
		props: {
			shopinfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			showSells(arg) {
				if (arg < 10000) {
					return arg
				} else {
					return (arg / 10000).toFixed(1) + '万'
				}
			}
		}
	}
</script>

<style scoped>
	.detail-shop-info {
		border-bottom: 3px solid #eee;
		padding-bottom: 20px;
	}
	.shop-header {
		height: 40px;
		margin: 10px 0 20px 5px;
	}
	.shop-logo {
		width: 40px;
		border-radius: 50%;
	}
	.shop-name {
		position: relative;
		margin-left: 5px;
		top: -16px;
	}
	.shop-body {
		display: flex;
		text-align: center;
		font-size: 13px;
	}
	.body-left {
		display: flex;
		flex: 1;
		width: 50%;
		height: 40px;
		line-height: 20px;
		border-right: 2px solid #eee;
	}
	.sells,
	.count {
		flex: 1;
	}
	.body-right {
		position: relative;
		top: -15px;
		left: 5%;
		flex: 1;
	}
	.body-right table {
		width: 80%;
	}
	.body-right td {
		height: 21px;
		text-align: left;
	}
	.common {
		color: #00D20D;
	}
	.common2 span{
		background-color: #00D20D;
		color: #fff;
	}
	.better {
		color: var(--color-high-text);
	}
	.better span {
		background-color: var(--color-high-text);
	}
	.btn {
		position: relative;
		left: 50%;
		transform: translate(-50%);
		width: 100px;
		height: 25px;
		border-radius: 12px;
		font-size: 13px;
		border: 0;
	}
</style>
