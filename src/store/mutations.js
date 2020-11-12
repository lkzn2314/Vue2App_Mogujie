import {ADD_COUNTER, ADD_TO_CART}from './mutations-types'

export default {
	[ADD_COUNTER](state, oldProduct) {
		oldProduct.count++
	},
	[ADD_TO_CART](state, payload) {
		payload.checked = true
		state.cartList.push(payload)
	}
}