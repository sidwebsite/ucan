const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'main': './src/js/main.js',
        'index': './src/js/index.js',
        "login": './src/js/login.js',
        'shareFeedback': './src/js/shareFeedback.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg|ico)$/i,
                type: 'asset/resource',
                parser: {
                    dataUrlCondition: {
                        maxSize: 1024
                    }
                },
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash:8][ext][query]'
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: false
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: 'index.html',
            minify: false,
            chunks: ['main', 'index', 'login']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/index_login.html',
            filename: 'index_login.html',
            minify: false,
            chunks: ['main', 'index']
        }),
        // 最新消息
        // new HtmlWebpackPlugin({
        //     template: './src/html/8_1.html',
        //     filename: '8_1.html',
        //     minify: false,
        //     chunks: ['main']
        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/html/8_2.html',
        //     filename: '8_2.html',
        //     minify: false,
        //     chunks: ['main']
        // }),
        // // 學校案例分享
        // new HtmlWebpackPlugin({
        //     template: './src/html/9.html',
        //     filename: '9.html',
        //     minify: false,
        //     chunks: ['main', 'shareFeedback']
        // }),
        // // 檔案下載
        // new HtmlWebpackPlugin({
        //     template: './src/html/10.html',
        //     filename: '10.html',
        //     minify: false,
        //     chunks: ['main']
        // }),
    ],
    devServer: {
        host: 'localhost',
        port: '4545',
        open: true
    },
    devtool: 'source-map'
};