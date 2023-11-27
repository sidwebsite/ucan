const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'main': './src/js/main.js',
        'index': './src/js/index.js',
        "login": './src/js/login.js',
        'shareFeedback': './src/js/shareFeedback.js',
        'news': './src/js/news.js',
        'sticky': './src/js/sticky.js',
        'customSelect': './src/js/customSelect.js',
        'search_1_2': './src/js/search_1_2.js',
        'search_1_5': './src/js/search_1_5.js',
        'footer': './src/js/footer.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
        clean: true
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
                type: 'asset/resource'
            },
            {
                test: /\.(eot|woff|woff2|ttf)$/,
                type: 'asset/resource'
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
            filename: 'css/style_rwd.css'
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
        new HtmlWebpackPlugin({
            template: './src/html/others/news.html',
            filename: 'others/news.html',
            minify: false,
            chunks: ['main', 'news', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/others/news_content.html',
            filename: 'others/news_content.html',
            minify: false,
            chunks: ['main', 'footer']
        }),
        // 學校案例分享
        new HtmlWebpackPlugin({
            template: './src/html/others/ShareAndFeedback.html',
            filename: 'others/ShareAndFeedback.html',
            minify: false,
            chunks: ['main', 'footer', 'shareFeedback']
        }),
        // 檔案下載
        new HtmlWebpackPlugin({
            template: './src/html/others/download.html',
            filename: 'others/download.html',
            minify: false,
            chunks: ['main', 'footer']
        }),
        // 職能職業查詢
        new HtmlWebpackPlugin({
            template: './src/html/search/search_1_1.html',
            filename: 'search/search_1_1.html',
            minify: false,
            chunks: ['main', 'customSelect', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/search/search_1_2.html',
            filename: 'search/search_1_2.html',
            minify: false,
            chunks: ['main', 'search_1_2', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/search/search_1_3.html',
            filename: 'search/search_1_3.html',
            minify: false,
            chunks: ['main', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/search/search_1_5.html',
            filename: 'search/search_1_5.html',
            minify: false,
            chunks: ['main','search_1_5', 'footer']
        }),
        // 職能應用
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_2_1.html',
            filename: 'application/application_2_2_1.html',
            minify: false,
            chunks: ['main', 'sticky', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_2_2.html',
            filename: 'application/application_2_2_2.html',
            minify: false,
            chunks: ['main', 'sticky', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_3_1.html',
            filename: 'application/application_2_3_1.html',
            minify: false,
            chunks: ['main', 'sticky', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_3_2.html',
            filename: 'application/application_2_3_2.html',
            minify: false,
            chunks: ['main', 'sticky', 'footer']
        }),
        // 認識UCAN
        new HtmlWebpackPlugin({
            template: './src/html/aboutUACN/aboutUACN_5_2.html',
            filename: 'aboutUACN/aboutUACN_5_2.html',
            minify: false,
            chunks: ['main', 'sticky', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/aboutUACN/aboutUACN_5_3.html',
            filename: 'aboutUACN/aboutUACN_5_3.html',
            minify: false,
            chunks: ['main', 'sticky', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/aboutUACN/aboutUACN_5_4.html',
            filename: 'aboutUACN/aboutUACN_5_4.html',
            minify: false,
            chunks: ['main', 'sticky', 'footer']
        }),
        // 職能概念
        new HtmlWebpackPlugin({
            template: './src/html/aboutUACN/aboutUACN_5_6.html',
            filename: 'aboutUACN/aboutUACN_5_6.html',
            minify: false,
            chunks: ['main', 'sticky', 'footer']
        }),
        
        // 聯絡我們
        new HtmlWebpackPlugin({
            template: './src/html/others/contactUs.html',
            filename: 'others/contactUs.html',
            minify: false,
            chunks: ['main', 'footer']
        }),
        // 修改密碼 
        new HtmlWebpackPlugin({
            template: './src/html/member/editPassword.html',
            filename: 'member/editPassword.html',
            minify: false,
            chunks: ['main', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/member/editPasswordExpiry.html',
            filename: 'member/editPasswordExpiry.html',
            minify: false,
            chunks: ['main', 'footer']
        }),
        // 忘記密碼
        new HtmlWebpackPlugin({
            template: './src/html/member/forgotPassword.html',
            filename: 'member/forgotPassword.html',
            minify: false,
            chunks: ['main', 'footer']
        }),
        // 帳號復用 
        new HtmlWebpackPlugin({
            template: './src/html/member/reuseAccount.html',
            filename: 'member/reuseAccount.html',
            minify: false,
            chunks: ['main', 'footer']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/member/reuseAccountPassword.html',
            filename: 'member/reuseAccountPassword.html',
            minify: false,
            chunks: ['main', 'footer']
        }),
        // 忘記帳號、密碼
        new HtmlWebpackPlugin({
            template: './src/html/member/forgotAccountAndPassword.html',
            filename: 'member/forgotAccountAndPassword.html',
            minify: false,
            chunks: ['main', 'footer']
        }),
    ],
    devServer: {
        host: '192.168.50.10',
        port: '4545',
        open: true
    },
    devtool: 'source-map'
};