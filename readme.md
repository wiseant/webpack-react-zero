# webpack4���㿪ʼ��򵥵�React16��������
1. ��ʼ����Ŀ
   `npm init -y`

2. ��װ`webpack`��`webpack-dev-server`
   `npm i webpack webpack-cli webpack-dev-server -D`

3. ��װ`react`��`react-dom`
   `npm i react react-dom -S`

4. ��Ϊ`react`��ʹ��`JSX`�﷨, ��Ҫ��װ`babel`��������
   `npm install babel-loader @babel/core @babel/preset-env @babel/preset-react -D`

5. �ڸ�Ŀ¼���½�`babel`�����ļ�`.babelrc`
   ```js
   {
       "presets": [
           "env",
           "react"
       ]
   }
   ```

6. �½�`public`Ŀ¼��Ȼ�󴴽�`index.html`�ļ�����body��ǩ������`<div id="root"></div>`

7. �½�`src`Ŀ¼Ȼ���������½�`index.js`�ļ�
   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   
   ReactDOM.render(
       <h1>Hello World</h1>,
       document.getElementById('root')
   )
   ```

8. ��װ`html-webpack-plugin`�����ڴ��ʱ��`html`�ļ����Ƶ�Ŀ���ļ���
   `npm i html-webpack-plugin -D`

9. ��װ`clean-webpack-plugin`����������ڴ��ǰ���Ŀ���ļ���
   `npm i clean-webpack-plugin -D`

10. ��д`webpack.config.js`
   ```js
   const path = require('path');
   // �������һ���࣬��������������ʱ�����ô�д��ͷ
   const HtmlWebpackPlugin = require('html-webpack-plugin');
   const CleanWebpackPlugin = require('clean-webpack-plugin');
   
   module.exports = {
     // ����ļ�
     entry: {
       app: './src/index.js'
     },
     // �����dist�ļ���, �ļ�����Ϊbundle.js
     output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, './dist')
     },
     // ���ÿ���������ʹ�õĶ˿ڼ�Ŀ¼
     devServer: {
       port: 3000,
       contentBase: './dist'
     },
     module: {
       rules: [
         {
           test: /\.(js|jsx)$/,
           use: 'babel-loader', //ʹ��babelת��jsx�﷨
           exclude: /node_modules/
         }
       ]
     },
     plugins: [
       new CleanWebpackPlugin(), //���ǰ�����Ŀ���ļ����������ļ�
       new HtmlWebpackPlugin({
         template: './public/index.html', // ��src/index.html��Ϊģ��
         hash: true, // ���ڴ���õ�bundle.js�������hash��
       })
     ]
   }
   ```

11. �༭`package.json`�ļ�, ��`scripts`�������`"dev"`��`"build"`
    ```js
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "webpack-dev-server --open",
        "build": "webpack --mode production"
      }
    ```

12. ���ն�ִ��`npm run build`���д����ִ��`npm run dev`���п�������

�ο���
[webpack4�������ô�򵥵�React16��������](https://www.cnblogs.com/gahou/p/9351002.html)
[webpack4 �react babel7������](https://blog.csdn.net/adley_app/article/details/84350882)