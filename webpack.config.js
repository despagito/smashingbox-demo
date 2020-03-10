/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts','.tsx', '.json']
    },
    mode: 'development',
    entry: {
        bundle: './src/client/index.jsx'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.(gif|png|jpg|svg|woff|woff2|ttf|eot)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: 'index.html' }
            ]
        },
        host: '0.0.0.0',
        hot: true,
        inline: true,
        proxy: {
            '/api': {
                changeOrigin: true,
                target: 'http://localhost:3000'
            }
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development') }
        }),
        new HtmlWebpackPlugin({
            template: 'src/client/index.html'
        })
    ]
};

