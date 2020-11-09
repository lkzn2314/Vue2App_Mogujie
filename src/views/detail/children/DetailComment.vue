<template>
	<div class="detail-comment" v-if="Object.keys(commentinfo).length !== 0">
		<div class="comment-header">
			<span>用户评价</span>
			<span class="more">更多</span>
		</div>
		<div class="user-photo">
			<img :src="commentinfo.user.avatar" alt="">
			<span>{{commentinfo.user.uname}}</span>
		</div>
		<div class="comment-content">
			{{commentinfo.content}}
		</div>
		<div class="comment-other">
			<span class="date">{{commentinfo.created | showTime}}</span>
			<span>{{commentinfo.style}}</span>
			<div class="img"><img :src="item" v-for="item in commentinfo.images" alt=""></div>
		</div>
	</div>
</template>

<script>
	import {formatDate} from 'common/utils'
	
	export default {
		name: 'DetailComment',
		props: {
			commentinfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			showTime(arg) {
				const date = new Date(arg * 1000)
				return formatDate(date, 'yyyy-MM-dd')
			}
		}
	}
</script>

<style scoped>
	.detail-comment {
		margin: 0 10px 20px;
		padding-top: 20px;
		font-size: 13px;
		border-bottom: 5px solid #eee;
	}
	.comment-header {
		position: relative;
		padding-bottom: 10px;
		margin-bottom: 10px;
		border-bottom: 1px solid #eee;
	}
	.more {
		position: absolute;
		right: 13px;
	}
	.more::after {
		content: '';
		position: absolute;
		right: -5px;
		top: 3px;
		width: 8px;
		height: 8px;
		border: 1px solid #000;
		border-left: transparent;
		border-bottom: transparent;
		transform: rotate(45deg);
	}
	.user-photo img {
		width: 40px;
		border-radius: 50%;
	}
	.user-photo span {
		position: relative;
		left: 8px;
		top: -18px;
	}
	.comment-content {
		margin: 4px 0 10px;
	}
	.comment-other .date {
		margin-right: 10px;
	}
	.img {
		margin: 8px 0 10px;
	}
	.img img{
		width: 60px;
	}
</style>
