"use strict";

const webpack = require('webpack');
const path = require('path');
const debug = process.env.NODE_ENV !== "production";
module.exports = {
    entry: './src/clockApp.js',
    output: {
        // Webpack prefers an absolute path:
        path: path.resolve(__dirname, './dist'),
        filename: debug ? 'bundle.js' : 'bundle.min.js',
        libraryTarget: "var",
        // name of the global var: "Foo"
        library: "ClockWidget"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: debug ? [] : [ new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })],
    devtool: debug ? 'source-map' : false
}