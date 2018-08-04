<template>
<div class="app-card">
	<img :src="data.img" alt="">
	<div class="card-content">
		<h2>{{data.title}}</h2>
		<div class="card-intro">
			<div class="card-sales">{{data.sales}}人与你一起学习</div>
			<div class="card-price">￥{{data.price}}</div>
			<div @click="toggle" :class="data.hasBuy ? 'card-buy choose' : 'card-buy'">{{data.hasBuy ? '取消' : '购买'}}</div>
		</div>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
.app-card {
	margin: 20px;
	border-radius: 10px;
	overflow: hidden;
	img {
		width: 100%;
	}
	.card-content {
		background: #fff;
	}
	h2 {
		padding: 10px;
		font-size: 20px;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}
	.card-intro {
		padding: 0 10px 15px;
		display: -webkit-box;
		font-size: 12px;
		div {
			height: 30px;
			line-height: 30px;
		}
	}
	.card-sales {
		-webkit-box-flex: 1;
	}
	.card-price {
		min-width: 80px;
		font-size: 16px;
		color: #f30;
		text-align: right;
		padding-right: 5px;
	}
	div.card-buy {
		width: 36px;
		color: #fff;
		height: 24px;
		background: #f30;
		position: relative;
		top: 3px;
		line-height: 24px;
		text-align: center;
		border-radius: 3px;
		&.choose {
			color: #333;
			background: #efefef;
		}
	}

}
</style>
<script type="text/javascript">
export default {
	// 注册属性数据
	props: ['data'],
	// 方法
	methods: {
		// 切换购买状态
		toggle() {
			// 向store发布消息
			// 先发布消息，再更新数据
			this.$store.commit(this.data.hasBuy ? 'deleteProduct' : 'addProduct', this.data)
			// 更改状态
			// 解决数据丢失，1 预定义出来  2 $set方法解决
			// this.data.hasBuy = !this.data.hasBuy;
			this.$set(this.data, 'hasBuy', !this.data.hasBuy)
			// console.log(this.data)
		}
	}
}
</script>