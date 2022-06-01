const { resolve } = require('path');
const FaviconPlugin = require('favicons-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

const root = (...args) => resolve(__dirname, ...args);
const isProduction = process.env.BUILD_ENV === 'production';

module.exports = {

    mode: isProduction ? 'production' : 'development',

    entry: root('src/main'),

    output: {
        path: root('dist/'),
        filename: isProduction ? '[name].[contenthash].js' : '[name].js'
    },

    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',

    plugins: [
        new HTMLPlugin({
            inject: true,
            template: root('src/index.html')
        }),
        new FaviconPlugin({
            cache: !isProduction,
            inject: true,
            logo: root('src/assets/images/favicon.png'),
            prefix: isProduction ? 'assets/images/icons/[contenthash]/' : 'assets/images/icons/'
        })
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(png|jpe?g|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: `assets/images/${isProduction ? '[contenthash]' : '[name]'}.[ext]`
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/
                }
            }
        }
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json', '.png', '.jpeg', '.jpg'],
        modules: [root('node_modules'), root('src')]
    },

    node: {
        __dirname: false,
        __filename: false
    }

};
