const path = require('path');
// 插件都是一个类，所以我们命名的时候尽量用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // 入口文件
  entry: {
    app: './src/index.js'
  },
  // 输出到dist文件夹, 文件名字为bundle.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  // 配置开发服务器使用的端口及目录
  devServer: {
    port: 3000,
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader', //使用babel转换jsx语法
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), //打包前先清空目标文件夹中所有文件
    new HtmlWebpackPlugin({
      template: './public/index.html', // 用src/index.html作为模板
      hash: true, // 会在打包好的bundle.js后面加上hash串
    })
  ]
}