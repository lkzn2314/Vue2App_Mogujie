<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImg" :key="showImg" alt="" @load="imgLoad">
    <div class="item-text">
			<p>{{goodsitem.title}}</p>
			<div>
			  <span>{{goodsitem.price}}</span>
			  <span>{{goodsitem.cfav}}</span>
			</div>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsitem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
		computed: {
			showImg() {
				return this.goodsitem.img || this.goodsitem.image || this.goodsitem.show.img
			}
		},
    methods: {
      imgLoad() {
				if (this.$route.path.indexOf('/home')) {
					this.$bus.$emit('imgLoad')
				}
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsitem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
		position: relative;
    width: 50%;
		padding-bottom: 40px;
    font-size: 12px;
  }
  .goods-list-item img {
    width: 95%;
    border-radius: 6px;
  }
	.item-text {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0 6px;
	}
  .goods-list-item p {
    margin: 5px 0 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods-list-item > div {
    margin-bottom: 4px;
  }
  .goods-list-item > div span:first-child {
    position: relative;
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-list-item  div span:first-child::after {
    content: '';
    position: absolute;
    right: -20px;
    width: 14px;
    height: 14px;
    background-color: pink;
    background: url(~assets/img/common/collect.svg)  0 0/14px 14px;
  }
</style>
