'use strict';
/*eslint no-console: 0*/
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const devConfig = require('./webpack.config.dev.js')
const path = require('path');

var minimist = require('minimist');

var args = minimist(process.argv.slice(2));

const isDeveloping =args.NODE_ENV === 'development';
const port = isDeveloping ? 8080 : 9090;

function baseConfig(config, contentBase) {
  return new webpackDevServer(webpack(config), {
    historyApiFallback: true,
    hot: true,
    inline: true,
    publicPath: config.output.publicPath,
    //progress: true,
    contentBase: contentBase,
    stats: { colors: true }
  });
}

let server;
if(isDeveloping) {

  var exec = require('child_process').exec;
  var parentPath = path.resolve( __dirname, "../" );

  exec('anywhere 5000 -h localhost', {
      cwd: parentPath,
  } );

  server = baseConfig(devConfig, "./");
  console.log("development mode...");

  server.listen(port, "localhost", function(err) {
    if(err) {
      console.log(err);
    }
    console.log('==> 🌎 Listening on ' + process.env.NODE_ENV + ' port ' + port);
  });
} 

