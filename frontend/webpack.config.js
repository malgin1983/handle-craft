const webpack = require('webpack');
const path = require('path');

// variables
const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	watch: true,
	context: sourcePath,
	entry: {
		app: './index.tsx',
	},
	output: {
		path: outPath,
		filename: isProduction ? '[contenthash].js' : '[hash].js',
		chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].[hash].js',
	},
	target: 'web',
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
	},
	module: {
		rules: [
			// .ts, .tsx
			{
				test: /\.tsx?$/,
				use: [
					!isProduction && {
						loader: 'babel-loader',
						options: { plugins: ['react-hot-loader/babel'] },
					},
					'ts-loader',
				].filter(Boolean),
			},
			// css
			{
				test: /\.css$/,
				use: [
					isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
					},
				],
			},
			// static assets-
			{ test: /\.html$/, use: 'html-loader' },
			{ test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
			{
				test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
				use: 'file-loader',
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
			DEBUG: false,
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[hash].css',
			disable: !isProduction,
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'), // шаблон
			filename: 'index.html',
		}),
	],
	devServer: {
		port: 3000,
		contentBase: './',
		watchOptions: {
			poll: true,
		},
	},
};
