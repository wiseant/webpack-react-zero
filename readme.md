# webpack4从零开始搭建简单的React16开发环境
1. 初始化项目
   `npm init -y`

2. 安装`webpack`及`webpack-dev-server`
   `npm i webpack webpack-cli webpack-dev-server -D`

3. 安装`react`和`react-dom`
   `npm i react react-dom -S`

4. 因为`react`中使用`JSX`语法, 需要安装`babel`来编译它
   `npm install babel-loader @babel/core @babel/preset-env @babel/preset-react -D`

5. 在根目录下新建`babel`配置文件`.babelrc`
   ```js
   {
       "presets": [
           "env",
           "react"
       ]
   }
   ```

6. 新建`public`目录，然后创建`index.html`文件，在body标签中增加`<div id="root"></div>`

7. 新建`src`目录然后在里面新建`index.js`文件
   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   
   ReactDOM.render(
       <h1>Hello World</h1>,
       document.getElementById('root')
   )
   ```

8. 安装`html-webpack-plugin`，用于打包时将`html`文件复制到目标文件夹
   `npm i html-webpack-plugin -D`

9. 安装`clean-webpack-plugin`插件，用于在打包前清空目标文件夹
   `npm i clean-webpack-plugin -D`

10. 编写`webpack.config.js`
   ```js
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
   ```

11. 编辑`package.json`文件, 在`scripts`里面加入`"dev"`和`"build"`
    ```js
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack-dev-server --open",
        "build": "webpack --mode production"
      }
    ```

12. 在终端执行`npm run build`进行打包，执行`npm run dev`运行开发测试

参考：
[webpack4从零配置搭建简单的React16开发环境](https://www.cnblogs.com/gahou/p/9351002.html)
[webpack4 搭建react babel7遇到坑](https://blog.csdn.net/adley_app/article/details/84350882)