const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    entry: {
        app: './src/index.js',
        another: './src/another-module.js'
    },

    output: {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            title: '发布状态'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ]
}