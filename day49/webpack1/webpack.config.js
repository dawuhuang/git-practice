// 导入路径模块
const path = require("path");
// 导入默认预览功能
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
	// 设置生成预览页面的模板文件
	template: "./src/index.html",
	// 设置生成预览页面名称，该文件存于内存中，在目录中不显示
	filename: "index.html",
});
module.exports = {
	mode: "development",
	// 设置打包入口文件路径
	entry: path.join(__dirname, "./src/index.js"),
	// 设置出口文件
	output: {
		// 设置文件输出路径
		path: path.join(__dirname, "./dist"),
		// 设置文件名
		filename: "res.js",
	},
	// plugin 数组是webpack 打包期间会用到的一些插件
	plugins: [htmlPlugin],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
