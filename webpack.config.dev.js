const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var px2rem = require('postcss-pxtorem');
var getThemeConfig = require('./theme');
var theme = getThemeConfig();
var px2remOpts = {
    rootValue: 100,
    propWhiteList: [],
};

const config = {
    devtool: 'eval-source-map',
    context: __dirname,
    entry: {
        app: ["babel-polyfill","./src/app.tsx"],
        index: './src/styles/index.less'
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: [ '.ts', '.tsx',  '.web.js', '.js', '.json'],
    },
   
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader!ts-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                //设置对应的资源后缀.
                test: /\.(css|less)$/,
                //设置后缀对应的加载器.
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:`css-loader!less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`,
                    publicPath: './'
                })
                    
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.evn.NODE_ENV': JSON.stringify("development"),
            __DEV__: JSON.stringify( JSON.parse(process.env.DEBUG || 'false') )
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true
        }),
       
        new ExtractTextPlugin("[name].css"),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};

module.exports = config;