	import {debounce} from 'common/utils'
	import BackTop from 'components/content/backtop/BackTop'
	
	export const itemMixin = {
		data() {
			return {
				newRefresh: null
			}
		},
		mounted() {
			this.newRefresh = debounce(this.$refs.scroll.refresh, 400)
		}
	} 
	
	//回到顶部
	export const backTopMixin = {
		components: {
			BackTop
		},
		data() {
			return {
				isShow: false
			}
		},
		methods: {
			toTopClick() {
				this.$refs.scroll.scrollTo(0, 0, 300)
			}
		}
	}