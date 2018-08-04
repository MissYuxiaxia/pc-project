// 引入库
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入组件
import Home from '../pages/home.vue';
import Search from '../pages/search.vue';
import Buy from '../pages/buy.vue';

// 安装路由
Vue.use(VueRouter);


// 定义规则
const routes = [
	// 首页
	{ path: '/home/:type', component: Home },
	// 搜索页面
	{ path: '/search/:word', component: Search },
	// 购买页面
	{ path: '/buy', component: Buy },
	// 默认页面
	{ path: '*', component: Home }
]

// 实例化路由，并暴露接口
export default new VueRouter({ routes })