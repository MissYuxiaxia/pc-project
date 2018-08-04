<template>
<div class="app-shopping-car">
	<div class="shopping-car-price">共￥{{$store.state.price}}元</div>
	<div class="shopping-car-done" @click="showBuyPage">选好了</div>
</div>
</template>
<style type="text/css" lang="scss">
.app-shopping-car {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background: #484d54;
	display: -webkit-box;
	font-size: 18px;
	color: #fff;
	.shopping-car-price {
		-webkit-box-flex: 1;
	}
	.shopping-car-done {
		width: 100px;
		background: #fe2947;		
	}
}
</style>
<script type="text/javascript">
export default {
	// 方法
	methods: {
		// 进入购买页面
		showBuyPage() {
			location.hash = '#/buy';
		}
	}
}
</script>