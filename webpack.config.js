const { resolve } = require('path');
const FaviconPlugin = require('favicons-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const root = (...args) => resolve(__dirname, ...args);
const isProduction = process.env.BUILD_ENV === 'production';

module.exports = {

    mode: isProduction ? 'production' : 'development',

    entry: root('src/main'),

    output: {
        path: root('dist/'),
        filename: isProduction ? '[name].[contenthash].js' : '[name].js'
    },

    plugins: [
        new HTMLPlugin({
            inject: true,
            template: root('src/index.html')
        }),
        new FaviconPlugin({
            icons: {
                android: true,
                appleIcon: false,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: true,
                yandex: false,
                windows: false
            },
            logo: root('src/assets/images/favicon.png'),
            persistentCache: !isProduction,
            prefix: isProduction ? 'assets/images/icons/[hash]-' : 'assets/images/icons/',
            title: 'The Coditian',
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
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: true,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial'
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
