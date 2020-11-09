<template>
	<div class="detail-goods-info" v-if="Object.keys(goodsinfo).length !== 0">
		<div class="info-title">{{goodsinfo.title}}</div>
		<div class="info-price">
		  <span class="nprice">{{goodsinfo.newPrice}}</span>
		  <span class="oprice">{{goodsinfo.oldPrice}}</span>
		  <span v-if="goodsinfo.discount" class="discount">{{goodsinfo.discount}}</span>
		</div>
		<div class="info-other">
		  <span>{{goodsinfo.columns[0]}}</span>
		  <span>{{goodsinfo.columns[1]}}</span>
		  <span>{{goodsinfo.services[goodsinfo.services.length - 1].name}}</span>
		</div>
		<div class="info-service">
		  <span class="info-service-item"
		  v-for="index in goodsinfo.services.length-1" :key="index">
		  <img :src="goodsinfo.services[index - 1].icon" alt="">
		  <span>{{goodsinfo.services[index - 1].name}}</span>
		  </span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailGoodsInfo',
		props: {
			goodsinfo: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.info-title {
	  margin: 10px 8px 10px;
	  color: #000;
	}
	.nprice {
	  margin: 5px;
	  font-size: 24px;
	  color: var(--color-high-text);
	}
	.oprice {
	  font-size: 13px;
	  color: #a9a8a9;
	  text-decoration: line-through;
	}
	.discount {
	  position: relative;
	  left: 5px;
	  top: -5px;
	  font-size: 12px;
	  color: #fff;
	  background-color: var(--color-high-text);
	  border-radius: 5px;
	}
	.info-other {
	  display: flex;
	  font-size: 13px;
	  height: 40px;
	  line-height: 50px;
	  border-bottom: 1px solid #eee;
	  text-align: center;
	}
	.info-other span {
	  flex: 1;
	  color: #a9a8a9;
	}
	.info-other span:first-child {
		padding-left: 5px;
		text-align: left;
	}
	.info-other span:last-child {
	  /* margin-right: -22px; */
		padding-right: 5px;
		text-align: right;
	}
	.info-service {
	  display: flex;
	  height: 55px;
	  line-height: 50px;
	  font-size: 13px;
	  border-bottom: 3px solid #eee;
	}
	.info-service-item {
	  flex: 1;
	  margin-left: 5px;
	}
	.info-service-item img {
		position: relative;
		top: 1px;
		width: 12px;
	}
</style>
