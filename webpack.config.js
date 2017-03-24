module.exports = {
	entry: './src/client/index.jsx',
	output: {
		filename: './dist/public/app.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
};
