const path = require("path");
// 导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 创建对象
const htmlPlugin = new HtmlWebpackPlugin({
	// 设置生成预览页面的模板文件
	template: "./src/index.html",
	filename: "index.html",
});
module.exports = {
	// development 开发者模式
	mode: "development",
	entry: path.join(__dirname, "./src/index.js"),
	output: {
		path: path.join(__dirname, "./dist"),
		filename: "bundle.js",
	},
	plugins: [htmlPlugin],
	module: {
		rules: [
			{ test: /\.css$/, use: ["style-loader", "css-loader","postcss-loader"] },
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
			// {
			// 	test: /\.scss$/,
			// 	use: ["style-loader", "css-loader", "sass-loader"],
            // },
            {
                test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: "url-loader?limit=16940"
            },{
                test: /\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            }
		],
	},
};
