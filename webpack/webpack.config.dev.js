
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConfigBase = require('./webpack.config.base.js');
const config = require('./config');

const devConfig = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                ],
            }, {
                test: /^.((?!module).)*\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            importLoaders: 1,
                        },
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    }, {
                        loader: 'sass-loader',
                    },
                ],
            }, {
                test: /\.module\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                        },
                    }, {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        },
                    }, {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        port:config.DEV_PORT,
        host: config.DEV_IP,
        hot: true,
        quiet: false,
        historyApiFallback: {
            index: '/index.html',
        },
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false,
        },
        proxy: {},
    },
    plugins: [

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev'),
            IS_DEVELOPMETN: true,
        }),
        new webpack
            .optimize
            .CommonsChunkPlugin({
                name: 'vendor', // 入口文件名
                filename: 'vendor.bundle.js', // 打包后的文件名
            }),
    ],
};
module.exports = merge(webpackConfigBase, devConfig);
