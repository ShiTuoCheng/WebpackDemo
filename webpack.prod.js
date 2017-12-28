const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJS = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {

    devtool: 'source-map',
    plugins: [
        new UglifyJS({
            sourceMap: true
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})