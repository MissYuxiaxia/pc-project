<!-- 模板 -->
<template>
<div>
	<div class="app-header">
		<div class="search-btn" @click="showSearch">搜索</div>
		<h1>爱创课堂授课网站</h1>
		<div class="login">登录</div>
		<div class="search" v-show="isShow">
			<input type="text" v-model="msg" placeholder="请输入搜索关键字" @keyup.enter="gotoSearch">
			<span @click="hideSearch">取消</span>
		</div>
	</div>
	<router-view></router-view>
</div>
</template>
<!-- 样式 -->
<!-- vue中的scoped属性会向子组件传递 -->
<style type="text/css" lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
}
body, html {
	background: #efefef;
}
.app-header {
	background: #06c1ae;
	height: 60px;
	line-height: 60px;
	color: #fff;
	font-size: 16px;
	display: -webkit-box;
	text-align: center;
	position: relative;
	.search-btn {
		width: 60px;
	}
	h1 {
		-webkit-box-flex: 1;
		font-size: 24px;
	}
	.login {
		width: 60px;
	}
	.search {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		color: #333;
		padding: 0 20px;
		display: -webkit-box;
		font-size: 0;
	    padding-top: 11px;
		input {
			display: block;
			-webkit-box-flex: 1;
			height: 14px;
			background: #efefef;
			border: none;
			outline: none;
			font-size: 14px;
			padding: 12px 0 12px 20px;
			// border-radius: 19px;
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
		}
		span {
			width: 60px;
			background: #efefef;
			font-size: 14px;
			line-height: 14px;
			vertical-align: top;
			padding: 12px 0;
			box-sizing: border-box;
			display: inline-block;
			border-top-right-radius: 20px;
			border-bottom-right-radius: 20px;
		}
	}
}
</style>
<!-- 脚本 -->
<script type="text/javascript">
export default {
	// 静态绑定的数据
	data() {
		return {
			// 默认隐藏搜索框
			isShow: false,
			// 搜索数据
			msg: ''
		}
	},
	// 定义方法
	methods: {
		// 隐藏搜索框
		hideSearch() {
			this.isShow = false;
		},
		// 显示搜索框
		showSearch() {
			this.isShow = true;
		},
		// 进入搜索页面
		gotoSearch() {
			// 切换路由
			location.hash = '#/search/' + this.msg;
			// 清空msg
			this.msg = '';
			// 隐藏搜索框
			this.isShow = false;
		}
	}
}
</script>