<!-- 模板 -->
<template>
<div class="app-buy">
	<div class="price-part">
		<span class="intro">课程总价</span>
		<span class="price">￥{{$store.state.price}}</span>
	</div>
	<div class="menu-part">
		<span class="btn-cancel" @click="goBack">取消购买</span>
		<span class="btn-buy">立即付款</span>
	</div>
	<div class="list-part">
		<div class="title">已购商品</div>
		<div class="line"></div>
		<div class="items">
			<Card v-for="(item, index) in $store.state.products" :data="item" :key="index"></Card>
		</div>
	</div>
</div>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss">
.app-buy {
	.price-part {
		background: #fff;
		padding: 30px 20px 20px;
		font-size: 20px;
		color: #666;
		.price {
			font-size: 40px;
			color: #f30;
		}
	}
	.menu-part {
		background: #fff;
		text-align: center;
		padding-bottom: 20px;
		.btn-cancel,
		.btn-buy {
			display: inline-block;
			padding: 8px 15px;
			font-size: 16px;
			background: #aaa;
			border-radius: 5px;
			color: #fff;
			margin: 0 10px;
		}
		.btn-buy {
			background: #f30;
		}
	}
	.list-part {
		.title {
			background: #fff;
			padding: 20px 20px 10px;
			font-size: 24px;
		}
		.line {
			height: 30px;
			background-image: linear-gradient(#fff, #efefef);
		}
	}
}
</style>
<!-- 脚本 -->
<script type="text/javascript">
// 引入卡片组件
import Card from '../components/card.vue';
export default {
	// 注册组件
	components: {
		Card
	},
	// 方法
	methods: {
		// 返回上一个页面
		goBack() {
			history.go(-1);
		}
	},
	mounted() {
		// 显示最顶部
		window.scrollTo(0, 0)
		// console.log(1111, this.$store.state)
	}
}
</script>