const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash'); 
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: { 
        index:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use:[
                        (isDev? 'style-loader' : MiniCssExtractPlugin.loader),
                        {
                            loader:'css-loader',
                            options: {
                                importLoaders: 2
                            }
                        },
                        'postcss-loader'
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            },
            {
                test: /\.(png|jpе?g|gif|ico|svg)$/i,
                use: [
                    'file-loader?name=./images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, 
                            disable: true, 
                        },
                    },
                ],
            }        
        ]
    },
    plugins: [ 
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash:true,
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash:true,
            template: './src/about/about.html',
            filename: 'about.html',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash:true,
            template: './src/stats/stats.html',
            filename: 'stats.html',
        }),
        new WebpackMd5Hash(),
    ]
}

