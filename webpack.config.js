
/* eslint-disable */

// const webpack = require('webpack');
const path = require('path');


const BUILD_DIR= path.resolve('dist');        // Build directory
const APP_DIR= path.resolve('src');           // Source directory


const webpackConfig = {
	
	entry: path.join(APP_DIR, 'main.jsx'),
	
	output: {
		path: BUILD_DIR,
		filename: 'script.js'
	},

	module: {

		loaders: [
			{
				test: /\.js?/,
				exclude: /node_modules/,
				include: APP_DIR,
				loader: 'babel'
			}
		]
	},

	devtool: 'source-map'
};

module.exports = webpackConfig;
