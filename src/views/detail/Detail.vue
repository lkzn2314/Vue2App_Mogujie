 <template>
	 <div id="detail">
		 <h2>详情页</h2>
	 </div>
</template>

<script>
	import {getDetail} from 'network/detail'
	
	export default {
		name: 'Detail',
		data() {
			return {
				iid: null
			}
		},
		created() {
			this.iid = this.$route.params.iid
			
			getDetail(this.iid).then(res => {
				console.log(res)
			})
		}
	}
</script>

<style scoped>
</style>
