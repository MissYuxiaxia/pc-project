<!-- 模板 -->
<template>
<div class="app-home">
	<div class="app-menu">
		<router-link v-for="(item, index) in menu" :to="'/home/' + item.id" v-text="item.text" :key="index"></router-link>
	</div>
	<!-- 循环创建卡片 -->
	<Card v-for="(item, index) in data" :data="item" :key="index"></Card>
	<!-- 购物车 -->
	<ShoppingCar></ShoppingCar>
</div>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss">
.app-home {
	margin-bottom: 60px;
	.app-menu {
		background: #fff;
		height: 40px;
		line-height: 40px;
		text-align: center;
		a {
			font-size: 16px;
			text-decoration: none;
			color: #333;
			padding: 0 15px;
			border-bottom: 3px solid transparent;
			display: inline-block;
		}
		.router-link-active {
			color: red;
			border-bottom-color: red;
		}
	}
}
</style>
<!-- 脚本 -->
<script type="text/javascript">
// 引入组件
import Card from '../components/card.vue';
import ShoppingCar from '../components/shopping-car.vue';
export default {
	// 定义数据
	data() {
		return {
			menu: [
				{ text: '高级课程', id: '高级' },
				{ text: '进阶课程', id: '进阶' },
				{ text: '初级课程', id: '初级' }
			],
			data: [],
			// 数据缓存
			cache: {}
		}
	},
	components: {
		Card,
		ShoppingCar
	},
	// 方法
	methods: {
		// 封装请求方法
		getData() {
			// 类别
			let type = this.$route.params.type;
			// 如果缓存中，有该数据，直接使用这个数据
			// console.log(this.cache[type || home])
			if (this.cache[type || 'home']) {
				// 使用缓存数据， 终止后面程序执行
				return this.data = this.cache[type || home]
			}
			// 请求数据  
			this.$http.get(`action/lesson/${type ? 'type?id=' + type  : 'home'}`)
				// 查看返回的结果
				.then(({ data }) => {
					// 数据库读取数据成功
					if (data.errno === 0) {
						// 缓存数据
						this.cache[type || 'home'] = data.data;
						// 更新数据
						this.data = data.data;
					} else {
						alert(data.msg)
						// 清空页面
						this.data = [];
					}
				})
		}
	},
	// 组件创建完成，请求数据
	mounted() {
		this.getData();
	},
	// 监听数据变化
	watch: {
		$route() {
			this.getData();
		}
	}
}
</script>