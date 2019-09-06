var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/clockApp.js',
    output: {
        // Webpack prefers an absolute path:
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
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
    devtool: 'source-map'
}