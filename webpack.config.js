const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATH = {
    src: path.join(__dirname, './src/main/js/'),
    build: path.join(__dirname, './src/main/resources/static')
};

const common = {
    entry: PATH.src + './index.js',
    output: {
        path: PATH.build,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader','less-loader']
            },
            {
                test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|ico)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[hash].[ext]'
                }
            }
        ]
    }
};

const extractTextPlugin = {
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css'
        })
    ]
};

const devConfig = {
    devServer: {
        contentBase: path.resolve(__dirname, 'src/main/resources/templates'),
        stats: 'errors-only',
        port: 9000,
        historyApiFallback: true
    }
};

const uglifyJsPlugin = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ]
};

const definePlugin = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            definePlugin,
            uglifyJsPlugin,
            extractTextPlugin
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devConfig,
            extractTextPlugin
        ])
    }
};