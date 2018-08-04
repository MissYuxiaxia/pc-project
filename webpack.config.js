// 引入path模块
var path = require('path');
// 编译模板的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 配置
module.exports = {
	// vue模块的入口文件
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js'
		}
	},
	// 入口文件
	entry: './src/main.js',
	// 发布文件
	output: {
		filename: './dist/mobile.js',
		// 路径
		path: path.join(process.cwd(), '../static/')
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// js用es6语法
			{
				test: /\.js$/,
				loader: 'babel-loader',
				// 屏蔽编译node_modules目录下的文件
				exclude: '/node_modules/',
				query: {
					presets: ['es2015']
				}
			},
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			// css
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			// sass
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},
	// 与功能相关的配置
	plugins: [
		// 编译模板
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: '../views/mobile.html',
			inject: true,
			hash: true
		})
	]
}