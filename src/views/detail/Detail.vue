<template>
	<div id="detail">
		<detail-nav-bar @themeClick="themeClick" ref="nav"/>
		
		<scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
			<detail-swiper :top-images="banners" />
			<detail-goods-info :goodsinfo="goodsInfo" />
			<detail-shop-info :shopinfo="shopInfo" />
			<detail-show-img :showimg="showImg" @detailImgLoad="detailImgLoad" />
			<detail-params ref="params" :params="paramsInfo" />
			<detail-comment ref="comment" :commentinfo="commentInfo" />
			<goods-list ref="recommend" :goods="recommendInfo" />
		</scroll>
		<back-top v-show="isShow" @click.native="toTopClick"/>
		<detail-bottom-bar @addToCart="addCart"/>
		
	</div>
</template>

<script>
	import DetailNavBar from './children/DetailNavBar'
	import DetailSwiper from './children/DetailSwiper'
	import DetailGoodsInfo from './children/DetailGoodsInfo'
	import DetailShopInfo from './children/DetailShopInfo'
	import DetailShowImg from './children/DetailShowImg'
	import DetailParams from './children/DetailParams'
	import DetailComment from './children/DetailComment'
	import DetailBottomBar from './children/DetailBottomBar'

	import GoodsList from 'components/content/goods/GoodsList'
	
	import Scroll from 'components/common/scroll/Scroll'

	import {debounce} from 'common/utils'
	import {itemMixin, backTopMixin} from 'common/mixin'

	import {
		getDetail,
		GoodsInfo,
		ShopInfo,
		ParamsInfo,
		getRecommend
	} from 'network/detail'

	export default {
		name: 'Detail',
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailGoodsInfo,
			DetailShopInfo,
			DetailShowImg,
			DetailParams,
			DetailComment,
			GoodsList,
			DetailBottomBar,
			Scroll
		},
		mixins: [itemMixin, backTopMixin],
		data() {
			return {
				iid: null,
				banners: [],
				goodsInfo: {},
				shopInfo: {},
				showImg: {},
				paramsInfo: {},
				commentInfo: {},
				recommendInfo: [],
				themeTop: [],
				getThemeTop: null,
				currentIndex: 0
			}
		},
		created() {
			this.iid = this.$route.params.iid

			getDetail(this.iid).then(res => {
				console.log(res)
				const data = res.result
				this.banners = data.itemInfo.topImages
				
				this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
				this.shopInfo = new ShopInfo(data.shopInfo)
				console.log(this.goodsInfo)
				this.showImg = data.detailInfo

				this.paramsInfo = new ParamsInfo(data.itemParams.info, data.itemParams.rule)

				if (data.rate.cRate !== 0) {
					this.commentInfo = data.rate.list[0]
				}
			})

			getRecommend().then(res => {
				this.recommendInfo = res.data.list
			})
			/* this.$nextTick(() => { }) */
			this.getThemeTop = debounce(() => {
				this.themeTop = []
				this.themeTop.push(0)
				this.themeTop.push(this.$refs.params.$el.offsetTop)
				this.themeTop.push(this.$refs.comment.$el.offsetTop)
				this.themeTop.push(this.$refs.recommend.$el.offsetTop)
				this.themeTop.push(Number.MAX_VALUE)
			}, 400)
		},
		/* updated() {
			this.themeTop = []
			this.themeTop.push(0)
			this.themeTop.push(this.$refs.params.$el.offsetTop)
			this.themeTop.push(this.$refs.comment.$el.offsetTop)
			this.themeTop.push(this.$refs.recommend.$el.offsetTop)
			console.log(this.themeTop)
		}, */
		mounted() {
			/* const refresh = debounce(this.$refs.scroll.refresh, 500)
			this.$bus.$on('detailImgLoad', () => {
				refresh()
			}) */
		},
		methods: {
			detailImgLoad() {
				//newRefresh混入方法
				this.newRefresh()

				this.getThemeTop()
			},
			themeClick(index) {
				this.$refs.scroll.scrollTo(0, -this.themeTop[index], 300)
			},
			contentScroll(position) {
				const positionY = -position.y
				for (var i = 0; i < this.themeTop.length; i++) {
					const length = this.themeTop.length
					//1、常规方式，判断条件较为复杂
					/* if ( this.currentIndex !== i && (i < length - 1 && positionY >= this.themeTop[i] && positionY < this.themeTop[i+1])
					|| (i == length - 1 && positionY >= this.themeTop[i])) {
						this.currentIndex = i
						console.log(this.currentIndex)
						this.$refs.nav.currentIndex = this.currentIndex
					} */
					
					//2、hack方式，在themeTop中push(Number.MAX_VALUE)值
					if ( this.currentIndex !== i && i < length - 1 && positionY >= this.themeTop[i] && positionY < 
					this.themeTop[i+1]) {
						this.currentIndex = i
						this.$refs.nav.currentIndex = this.currentIndex
					}
				}	
				this.isShow = positionY > 1000
			},
			addCart() {
				let product = {}
				product.img = this.banners[0]
				product.title = this.goodsInfo.title
				product.desc = this.goodsInfo.desc
				product.price = this.goodsInfo.realPrice
				product.iid = this.iid
				
				this.$store.dispatch('addCart', product)
			}
		}
	}
</script>

<style scoped>
	.content {
		position: fixed;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;
		background-color: var(--color-background);
		z-index: 9;
	}
</style>
