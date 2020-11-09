<template>
	<div class="detail-params" v-if="Object.keys(params).length !== 0">
		<table class="detail-sizes">
			<tr v-for="items in params.sizes[0]">
				<td v-for="item in items">{{item}}</td>
			</tr>
		</table>
		<table class="detail-infos">
			<tr v-for="item in params.infos">
				<td class="key">{{item.key}}</td>
				<td class="value">{{item.value}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'DetailParams',
		props: {
			params: {
				type: Object,
				default () {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.detail-params {
		padding: 15px 10px 0;
		font-size: 13px;
		padding-bottom: 20px;
		border-bottom: 4px solid #eee;
	}
	.detail-params table {
		width: 100%;
	}
	td {
		height: 30px;
		border-bottom: 1px solid #eee;
	}
	.detail-infos .key {
		width: 25%;
		height: 40px;
	}
	.value {
		color: var(--color-high-text);
	}
</style>
