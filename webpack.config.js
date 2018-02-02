/**
 * 发布的时候需要运行  webpack -p 才能正确的压缩代码
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var serverIP = "localhost";


var date = +new Date();
var timeStamp = "_" + date;

var isDebug = process.env.dist;

var getThemeConfig = require('./theme');
var theme = getThemeConfig();


var app = [
	path.join(__dirname, './src/app.tsx')
];
var style = [
	path.join(__dirname, './src/styles/index.less')
];


var publicPath = './dist/';

module.exports = {
	devtool: 'cheap-module-source-map',
   	entry:{
		app: [ "babel-polyfill", "./src/app.tsx" ],
		index: style,
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "[name].js",
		publicPath: publicPath,
        chunkFilename: '[name]' + timeStamp + ".js"
	},
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
		/*alias: {
			"common": path.join(__dirname, '../../nicezhuanye_frontend_common')
		}*/
	},
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "babel-loader!ts-loader" },
			{
				test: /\.js?$/,
				exclude: /node_modules|dist/,
				loader: 'babel-loader',//'babel-loader' 'es3ify-loader',
				
			},
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({fallback:'style-loader', loader:`css-loader!less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`, publicPath: './'})
            }
        ],
    },
	
	plugins: [
	    new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin("[name].css"),
		new webpack.DefinePlugin({
			'process.env': {
			'NODE_ENV': JSON.stringify('production')
			}
		}),
	  
	    new webpack.DefinePlugin({
	        __DEBUG__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
	    })
	]


};