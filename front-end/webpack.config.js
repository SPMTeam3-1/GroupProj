const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		sourceMapFilename: "bundle.map.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
				// use: [
				// 	 // instead of style-loader
				// 	{
				// 		loader: "css-loader",
				// 		options: {
				// 			modules: true,
				// 			importLoaders: 1,
				// 			localIdentName: "[name]_[local]_[hash:base64]",
				// 			sourceMap: true,
				// 			minimize: true
				// 		}
				// 	}
				// ]
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: "url-loader",
				options: {
					limit: 10000
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [htmlWebpackPlugin, new MiniCssExtractPlugin()]
};
