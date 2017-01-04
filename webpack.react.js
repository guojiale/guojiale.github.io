/**
 * Created by h on 2017/1/3.
 */
var HtmlWebpackPlugin=require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var path=require('path');
var jqueryPath = path.join(__dirname,"./node_modules/jquery/dist/jquery.js");
module.exports={
    entry:'./react-demo/app/index.js',
    output:{
        path:'./react-demo/build',
        filename:'bundle.js'
    },
    resolve:{
        extensions:["",".js",".css",".json"],
        alias:{
            'jquery': jqueryPath
        }
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                loader:'style!css'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: { presets: ["es2015","react"] },
                exclude:/node_modules/
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:"url?limit=8192"
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                loader: "url?limit=8192"
            }
        ],
        noParse: [jqueryPath]
    },
    devServer: {
            stats: { colors: true }, //显示颜色
            port: 8080,//端口
            contentBase: './react-demo/build',//指定静态文件的根目录
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./react-demo/app/index.html'}),
        new OpenBrowserWebpackPlugin({url:'http://localhost:8080'})
    ]
}