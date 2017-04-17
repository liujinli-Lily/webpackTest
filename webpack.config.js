/**
 * webpack打包JS配置
 * @authors 
 * @date    2016-05-31 17:44:31
 * @version v1.0.0
 1.生成package.json文件
 2 .通过全局安装webpack  执行命令如下：npm install -g webpack
 3.配置webpack.config.js
 4. jsx-loader加载器npm install jsx-loader --save-dev
    Style-loader加载器npm install style-loader --save-dev：
    css-loader加载器npm install css-loader --save-dev：  
    autoprefixer 加载器npm install autoprefixer --save-dev:(自动补全浏览器兼容样式)
5.局部安装webpack执行命令：npm install webpack --save-dev
    Gulp全局安装npm install -g gulp：
    gulp局部安装使用命令npm install gulp --save-dev 
6.样式 style-loader css-loader和less-loader sass-loader
    npm install ....  --save-dev 
7.js babel-loader加载器 babel-loader加载器能将ES6的代码转换成ES5代码，这使我们现在可以使用ES6
    npm install babel-loader -–save-dev
8.如何独立打包成样式文件
    需要安装 extract-text-webpack-plugin ：如下：npm install extract-text-webpack-plugin -–save-dev
 */

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); 
module.exports = {
    devtool: "source-map",//开发时使用，定位到错误JS位置
    entry: "./src/js/index.js",
    output: { 
        // filename: "build.js",  path: 'build/' 
        //输出路径
        path: path.join(__dirname,'./build/'),
        filename:'[name].js',
        // publicPath:"/dist/"
    },
    module: {
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理  // 独立打包成样式文件
            {test:/\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.less$/, loader: "style!css!less"},
           
            //.js 文件使用 jsx-loader 来编译处理 
            { test: /\.js$/, loader: "jsx-loader" },

            // { test: /\.js$/, loader: 'babel', exclude: '/node_modules/' },
            {test: /.(png|jpg)$/, loader: 'url?limit=8192'}
        ]
    },
    resolve: {
        //自动扩展文件后缀
        extensions: ['', '.js','.json', '.jsx', '.css', '.scss']
    },
    // 内联css提取到单独的styles的css 
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("styles.css"),
    ]
};
// entry是页面中的入口文件，比如我这边的入口文件时main.js 
// output:是指页面通过webpack打包后生成的目标文件放在什么地方去，
// 我这边是在根目录下生成build文件夹，该文件夹内有一个build.js文件； 
// resolve:定义了解析模块路径时的配置，常用的就是extensions;
// 可以用来指定模块的后缀，这样在引入模块时就不需要写后缀，会自动补全。 
// plugins:定义了需要使用的插件，比如commonsPlugin在打包多个入口文件时会提取公用的部分，生成common.js; 
// module.loaders：是文件的加载器，比如我们之前react需要在页面中引入jsx的js源码到页面上来，
// 然后使用该语法，但是通过webpack打包后就不需要再引入JSXTransformer.js；
// 看到上面的加载器；比如jsx-loader加载器就是代表JSXTransformer.js的，
// 还有style-loader和css-loader加载器；因此在使用之前我们需要通过命令把它引入到项目上来；
