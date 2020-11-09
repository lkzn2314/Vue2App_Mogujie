<template>
	<div class="detail-show-img" v-if="showimg.detailImage">
		<div class="detail-desc">
			<div class="point1"></div><div class="line1"></div>
			<div>{{showimg.desc}}</div>
			<div class="point2"></div><div class="line2"></div>
		</div>
		<div class="detail-img">
			<div class="key">{{showimg.detailImage[0].key}}</div>
			<div class="list">
				<img v-for="item in showimg.detailImage[0].list"
				:src="item" alt="" @load="imgLoad">
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'DetailShowImg',
		props: {
			showimg: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			imgLoad() {
				//事件总线方法
				// this.$bus.$emit('detailImgLoad')
				
				//利用混入方法
				this.$emit('detailImgLoad')
			}
		}
	}
</script>

<style scoped>
	.detail-show-img {
		font-size: 13px;
		padding-bottom: 13px;
		border-bottom: 3px solid #eee;
	}
	.detail-desc {
		position: relative;
		margin: 20px 16px 0;
		padding: 14px 0;
	}
	.point1,
	.point2 {
		position: absolute;
		width: 1px;
		border: 2px solid #000;
	}
	.line1,
	.line2 {
		position: absolute;
		width: 35%;
		border: .5px solid #BEBEBE;
	}
	.point1,
	.line1 {
		left: 0;
		top: 0;
	}
	.point2,
	.line2 {
		bottom: 0;
		right: 0;
	}
	.detail-img .key {
		margin: 5px 0 5px 16px;
		font-weight: 600;
	}
	.detail-img .list img {
		width: 100%;
	}
</style>
