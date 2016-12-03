const webpackMerge = require('webpack-merge'),
ExtractTextPlugin = require('extract-text-webpack-plugin'),
commonConfig = require('./webpack.common.js'),
helpers = require('./helpers'),

DefinePlugin = require('webpack/lib/DefinePlugin'),

ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(ENV),
                'config': JSON.stringify(require('./app.config.json'))
            }
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
