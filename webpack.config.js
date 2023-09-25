const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'main': './src/js/main.js',
        'index': './src/js/index.js',
        "login": './src/js/login.js',
        'shareFeedback': './src/js/shareFeedback.js',
        'footer': './src/js/footer.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        assetModuleFilename: pathData => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
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
            chunks: ['main', 'footer']
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
        // 
        new HtmlWebpackPlugin({
            template: './src/html/aboutUACN/competency.html',
            filename: 'aboutUACN/competency.html',
            minify: false,
            chunks: ['main', 'footer']
        })
    ],
    devServer: {
        host: 'localhost',
        port: '4545',
        open: true
    },
    devtool: 'source-map'
};