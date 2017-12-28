const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJS = require('uglifyjs-webpack-plugin');

module.exports = {

    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: Path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Manager'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new UglifyJS()
    ],
    devtool: 'inline-source-map'
}