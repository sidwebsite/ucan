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
        'search_1_1': './src/js/search_1_1.js',
        'search_1_2': './src/js/search_1_2.js',
        'search_1_4': './src/js/search_1_4.js',
        'diagnose_3_1_3': './src/js/diagnose_3_1_3.js',
        'diagnose_3_2_3': './src/js/diagnose_3_2_3.js',
        'diagnose_3_3_3': './src/js/diagnose_3_3_3.js',
        'diagnose_3_3_4': './src/js/diagnose_3_3_4.js',
        'diagnoseTest': './src/js/diagnoseTest.js',
        'recode_4_1': './src/js/recode_4_1.js',
        'recode_4_2': './src/js/recode_4_2.js',
        'recode_4_3_2': './src/js/recode_4_3_2.js',
        'recode_4_4': './src/js/recode_4_4.js',
        'recode_4_5_3': './src/js/recode_4_5_3.js',
        'contactUs_login': './src/js/contactUs_login.js',
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
            chunks: ['main', 'news']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/others/news_content.html',
            filename: 'others/news_content.html',
            minify: false,
            chunks: ['main']
        }),
        // 學校案例分享
        new HtmlWebpackPlugin({
            template: './src/html/others/ShareAndFeedback.html',
            filename: 'others/ShareAndFeedback.html',
            minify: false,
            chunks: ['main', 'shareFeedback']
        }),
        // 檔案下載
        new HtmlWebpackPlugin({
            template: './src/html/others/download.html',
            filename: 'others/download.html',
            minify: false,
            chunks: ['main', ]
        }),
        // 職能職業查詢
        new HtmlWebpackPlugin({
            template: './src/html/search/search_1_1.html',
            filename: 'search/search_1_1.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/search/search_1_2.html',
            filename: 'search/search_1_2.html',
            minify: false,
            chunks: ['main', 'search_1_2']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/search/search_1_3.html',
            filename: 'search/search_1_3.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/search/search_1_4.html',
            filename: 'search/search_1_4.html',
            minify: false,
            chunks: ['main','search_1_4']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/search/search_1_5_1.html',
            filename: 'search/search_1_5_1.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/search/search_1_5_2.html',
            filename: 'search/search_1_5_2.html',
            minify: false,
            chunks: ['main']
        }),
        // 職能應用
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_1_1.html',
            filename: 'application/application_2_1_1.html',
            minify: false,
            chunks: ['main','sticky']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_1_2.html',
            filename: 'application/application_2_1_2.html',
            minify: false,
            chunks: ['main','sticky']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_1_3.html',
            filename: 'application/application_2_1_3.html',
            minify: false,
            chunks: ['main', 'sticky']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_1_4.html',
            filename: 'application/application_2_1_4.html',
            minify: false,
            chunks: ['main', 'sticky']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_2_1.html',
            filename: 'application/application_2_2_1.html',
            minify: false,
            chunks: ['main', 'sticky']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_2_2.html',
            filename: 'application/application_2_2_2.html',
            minify: false,
            chunks: ['main','sticky']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_3_1.html',
            filename: 'application/application_2_3_1.html',
            minify: false,
            chunks: ['main', 'sticky']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/application/application_2_3_2.html',
            filename: 'application/application_2_3_2.html',
            minify: false,
            chunks: ['main', 'sticky']
        }),
        // 職能診斷-職業興趣探索
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_1_1.html',
            filename: 'diagnose/diagnose_3_1_1.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_1_2.html',
            filename: 'diagnose/diagnose_3_1_2.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_1_3.html',
            filename: 'diagnose/diagnose_3_1_3.html',
            minify: false,
            chunks: ['main', 'diagnose_3_1_3']
        }),
        // 職能診斷-共通職能診斷
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_2_1.html',
            filename: 'diagnose/diagnose_3_2_1.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_2_2.html',
            filename: 'diagnose/diagnose_3_2_2.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_2_3.html',
            filename: 'diagnose/diagnose_3_2_3.html',
            minify: false,
            chunks: ['main','diagnose_3_2_3']
        }),
        // 職能診斷-專業職能診斷
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_3_1.html',
            filename: 'diagnose/diagnose_3_3_1.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_3_2.html',
            filename: 'diagnose/diagnose_3_3_2.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_3_3.html',
            filename: 'diagnose/diagnose_3_3_3.html',
            minify: false,
            chunks: ['main', 'diagnose_3_3_3']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_3_4.html',
            filename: 'diagnose/diagnose_3_3_4.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_4_a.html',
            filename: 'diagnose/diagnose_3_4_a.html',
            minify: false,
            chunks: ['main','diagnoseTest']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_4_a_1.html',
            filename: 'diagnose/diagnose_3_4_a_1.html',
            minify: false,
            chunks: ['main','diagnoseTest']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_4_b.html',
            filename: 'diagnose/diagnose_3_4_b.html',
            minify: false,
            chunks: ['main','diagnoseTest']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_4_b_1.html',
            filename: 'diagnose/diagnose_3_4_b_1.html',
            minify: false,
            chunks: ['main','diagnoseTest']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/diagnose/diagnose_3_4_c.html',
            filename: 'diagnose/diagnose_3_4_c.html',
            minify: false,
            chunks: ['main','diagnoseTest']
        }),
        // 診斷紀錄
        new HtmlWebpackPlugin({
            template: './src/html/recode/recode_4_1.html',
            filename: 'recode/recode_4_1.html',
            minify: false,
            chunks: ['main','recode_4_1']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/recode/recode_4_2.html',
            filename: 'recode/recode_4_2.html',
            minify: false,
            chunks: ['main', 'recode_4_2']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/recode/recode_4_3_1.html',
            filename: 'recode/recode_4_3_1.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/recode/recode_4_3_2.html',
            filename: 'recode/recode_4_3_2.html',
            minify: false,
            chunks: ['main', 'recode_4_3_2']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/recode/recode_4_3_3.html',
            filename: 'recode/recode_4_3_3.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/recode/recode_4_4.html',
            filename: 'recode/recode_4_4.html',
            minify: false,
            chunks: ['main', 'recode_4_4']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/recode/recode_4_5_1.html',
            filename: 'recode/recode_4_5_1.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/recode/recode_4_5_2.html',
            filename: 'recode/recode_4_5_2.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/recode/recode_4_5_3.html',
            filename: 'recode/recode_4_5_3.html',
            minify: false,
            chunks: ['main', 'recode_4_5_3']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/recode/recode_4_5_4.html',
            filename: 'recode/recode_4_5_4.html',
            minify: false,
            chunks: ['main']
        }),
        // 認識UCAN
        new HtmlWebpackPlugin({
            template: './src/html/aboutUACN/aboutUACN_5_2.html',
            filename: 'aboutUACN/aboutUACN_5_2.html',
            minify: false,
            chunks: ['main', 'sticky']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/aboutUACN/aboutUACN_5_3.html',
            filename: 'aboutUACN/aboutUACN_5_3.html',
            minify: false,
            chunks: ['main', 'sticky']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/aboutUACN/aboutUACN_5_4.html',
            filename: 'aboutUACN/aboutUACN_5_4.html',
            minify: false,
            chunks: ['main', 'sticky']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/aboutUACN/aboutUACN_5_5.html',
            filename: 'aboutUACN/aboutUACN_5_5.html',
            minify: false,
            chunks: ['main', 'sticky']
        }),
        // 職能概念
        new HtmlWebpackPlugin({
            template: './src/html/aboutUACN/aboutUACN_5_6.html',
            filename: 'aboutUACN/aboutUACN_5_6.html',
            minify: false,
            chunks: ['main', 'sticky']
        }),
        
        // 聯絡我們未登入狀態
        new HtmlWebpackPlugin({
            template: './src/html/others/contactUs.html',
            filename: 'others/contactUs.html',
            minify: false,
            chunks: ['main']
        }),
        // 聯絡我們已登入狀態
        new HtmlWebpackPlugin({
            template: './src/html/others/contactUs_login.html',
            filename: 'others/contactUs_login.html',
            minify: false,
            chunks: ['main','contactUs_login']
        }),
        // 修改密碼 
        new HtmlWebpackPlugin({
            template: './src/html/member/editPassword.html',
            filename: 'member/editPassword.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/member/editPasswordExpiry.html',
            filename: 'member/editPasswordExpiry.html',
            minify: false,
            chunks: ['main']
        }),
        // 忘記密碼
        new HtmlWebpackPlugin({
            template: './src/html/member/forgotPassword.html',
            filename: 'member/forgotPassword.html',
            minify: false,
            chunks: ['main']
        }),
        // 帳號復用 
        new HtmlWebpackPlugin({
            template: './src/html/member/reuseAccount.html',
            filename: 'member/reuseAccount.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/member/reuseAccountPassword.html',
            filename: 'member/reuseAccountPassword.html',
            minify: false,
            chunks: ['main']
        }),
        // 忘記帳號、密碼
        new HtmlWebpackPlugin({
            template: './src/html/member/forgotAccountAndPassword.html',
            filename: 'member/forgotAccountAndPassword.html',
            minify: false,
            chunks: ['main']
        }),
        // 帳號申請
        new HtmlWebpackPlugin({
            template: './src/html/member/account.html',
            filename: 'member/account.html',
            minify: false,
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/html/member/admin.html',
            filename: 'member/admin.html',
            minify: false,
            chunks: ['main']
        }),
        // 網站地圖
        new HtmlWebpackPlugin({
            template: './src/html/others/sitemap_6_1.html',
            filename: 'others/sitemap_6_1.html',
            minify: false,
            chunks: ['main']
        }),
        // 手機板登入
        new HtmlWebpackPlugin({
            template: './src/html/others/login_phone.html',
            filename: 'others/login_phone.html',
            minify: false,
            chunks: ['main']
        })
    ],
    devServer: {
        // host: '192.168.50.10',
        port: '4545',
        open: true
    },
    devtool: 'source-map'
};