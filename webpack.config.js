const path = require('path');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  entry: path.resolve('./src/index.jsx'),
  output: {
    path: path.resolve('./public/js'),
    filename: 'index.bundled.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};


const serverConfig = {
  target: 'node',

  node: {
      __dirname: true
  },

  entry: path.resolve('./bin/start'),
  output: {
    path: path.resolve('./bin'),
    filename: 'www'
  },
  externals: [ nodeExternals() ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};

module.exports = [clientConfig, serverConfig];
