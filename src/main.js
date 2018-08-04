import Vue from 'vue';
// 引入应用程序组件
import App from './app.vue'
// 引入路由
import router from './router/router.js';
// 引入store
import store from './store/store.js';
// 引入axios
import axios from 'axios';

// 安装
Vue.prototype.$http = axios;

// 创建vue实例化对象
new Vue({
	// 注册路由
	router,
	// 注册store
	store,
	// 渲染组件
	render: h => h(App)
}).$mount('#app')
