const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const publicPath = 'http://localhost:3000/bundle/';
const config = {
    entry: { index: ['./app/main.js', 'webpack-hot-middleware/client?reload=true']},
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js',
        publicPath: publicPath
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader',
                {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }]
        }]
    },
    resolve: {
        alias: {
            css: path.resolve(__dirname, 'app/'),
            js: path.resolve(__dirname, 'app/'),
        },
        extensions: ['.js', '.css']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({ template: './views/index.html' }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;