const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const relativePath = '..'

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader',
          // 'eslint-loader',
        ],
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader',
      //   ]
      // }
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules',
    ],
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'assets/index.html',
    })
  ]
};