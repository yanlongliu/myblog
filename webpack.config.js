const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }]
    },
    resolve: {
        alias: {
            css: path.resolve(__dirname, 'public/css/'),
            js: path.resolve(__dirname, 'public/js/'),
        },
        extensions: ['.js', '.css']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({ template: './views/index.html' })
    ]
};

module.exports = config;