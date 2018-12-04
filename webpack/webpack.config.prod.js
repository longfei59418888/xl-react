
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const prodConfig = {
    entry: {
        app: './src/app.js',
    },
    devtool: 'source-map',
    output: {
        publicPath: '/',
        filename: 'js/[name][chunkhash:8].js',
        chunkFilename: 'js/[name][chunkhash:8].js',
        path: path.resolve(__dirname, '../dist'),
        // sourceMapFilename: 'js/[name][chunkhash:8].js.map',
    },
    resolve: {
      extensions: [
        '.js', '.jsx', '.scss',
      ],
      modules: [
        path.resolve(''), // 模块默认位置
        'node_modules',
      ],
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: [
              'babel-loader',
            ],
            exclude: [/(node_modules)/],
          }, {
            test: /\.(jpg|jpeg|gif|png)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10,
                  name: 'images/[name].[hash:8].[ext]',
                },
              },
            ],
          }, {
            test: /\.(eot|ttf|woff|woff2|svg)$/,
            use: 'file-loader?name=fonts/[name].[hash:8].[ext]',
          },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            },
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [autoprefixer({
                                    browsers: ['last 2 versions', '> 4%', 'iOS 7'],
                                })],
                            },
                        },
                    ],
                }),
            }, {
                test: /^.((?!module).)*\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            },
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [autoprefixer({
                                    browsers: ['last 2 versions', '> 4%', 'iOS 7'],
                                })],
                            },
                        }, {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            }, {
                test: /\.module\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]-[local]-[hash:base64:5]',
                            },
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [autoprefixer({
                                    browsers: ['last 2 versions', '> 4%', 'iOS 7'],
                                })],
                            },
                        }, {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
        ],
    },
    plugins: [ // 定义环境变量为开发环境
      new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, '../'),
      }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            IS_DEVELOPMETN: false,
            RELEASE_VERSION: JSON.stringify(process.env.envTag),
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
        // 提取css 根据入口文件，提取重复引用的公共代码类库，打包到单独文件中 new webpack   .optimize
        new webpack
            .optimize
            .CommonsChunkPlugin({ async: true, minChunks: 3 }),
    ],
};

module.exports = prodConfig;
