// 引入vue安装vuex
import Vue from 'vue';
import Vuex, { Store } from 'vuex';

// 安装
Vue.use(Vuex);

// 创建store， 并暴露接口
export default new Store({
	// 静态数据
	state: {
		price: 0,
		// 存储商品
		products: []
	},
	// 操作
	mutations: {
		// 添加商品
		addProduct(state, product) {
			// 理论上应该在这里根据id去重
			// 商品存在，不能添加了, 在数据库中是_id
			if (state.products.findIndex(item => item.id === product.id) >= 0) {
				// 不能添加
				return ;
			}
			// 判断NaN
			if (Object.is(+product.price, NaN)) {
				return;
			}
			state.price += +product.price;
			// 添加产品
			state.products.push(product)
			// console.log(state)
		},
		// 移除商品
		deleteProduct(state, product) {
			// 判断NaN
			if (Object.is(+product.price, NaN)) {
				return;
			}
			state.price -= product.price;
			// 从products中，引出该产品
			state.products.splice(state.products.findIndex(item => item.id === product.id), 1)
			// console.log(22, state)
		}
	}
})


