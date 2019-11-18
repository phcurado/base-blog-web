const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './public/index.html',
	filename: 'index.html'
})

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1
						}
					},
					'sass-loader'
				]
			}
		]
	},
	plugins: [htmlPlugin]
};