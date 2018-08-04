<!-- 模板 -->
<template>
<div id="app-search">
	<Card v-for="(item, index) in data" :data="item" :key="index"></Card>
	<ShoppingCar></ShoppingCar>
</div>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss"></style>
<!-- 脚本 -->
<script type="text/javascript">
// 引入组件
import Card from '../components/card.vue';
import ShoppingCar from '../components/shopping-car.vue';
// 定义组件
export default {
	// 初始化数据
	data() {
		return {
			data: []
		}
	},
	// 注册组件
	components: {
		Card,
		ShoppingCar
	},
	// 方法
	methods: {
		// 封装请求方法
		getData() {
			// 请求数据
			this.$http.get('/action/lesson/search?word=' + this.$route.params.word)
				// 监听数据返回, 存储数据
				.then(({ data }) => {
					// 如果返回成功
					if (data.errno === 0) {
						this.data = data.data;
					} else {
						alert(data.msg)
					}
				})
		}
	},
	// 组件创建完成，
	mounted() {
		this.getData();
	},
	// 监听路由变化
	watch: {
		$route() {
			this.getData();
		}
	}
}
</script>