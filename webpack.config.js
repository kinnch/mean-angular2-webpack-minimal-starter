var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'main': './src/main.ts'
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        root: './src',
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency'
        }),
        new CopyWebpackPlugin([{
            from: './src/assets',
            to: 'assets'
        }])
    ],
    output: {
        path: './dist',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    }
};