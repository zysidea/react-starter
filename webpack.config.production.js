const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  devtool: 'cheap-source-map',
  entry: path.resolve(__dirname, 'app/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { from: './app/index.html', to: 'index.html' },
      { from: './app/index.css', to: 'index.css' }
    ])
  ]
};