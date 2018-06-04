let path=require("path");
let htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/main.js",
    output:{
        filename:"bundle.js",
        path:__dirname+"/dist"
    },
    module:{
        rules:[
            {"test":/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {"test":/\.css$/,use:["style-loader","css-loader"]},
            {"test":/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {"test":/\.(png|jpg|jpeg|gif)/,use:"url-loader?limit=8192"},
            {"test":/\.vue$/,use:"vue-loader"}
           
        ]
       
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]

}