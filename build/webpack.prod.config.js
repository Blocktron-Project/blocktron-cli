/**
 * Webpack production build script
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    /**
     * set webpack build mode
     */
    mode: 'none',
    /**
     * set target as server (node)
     */
    target: 'node',
    /**
     * set minification flag
     */
    optimization: {
        minimize: true
    },
    entry: path.resolve(__dirname, '../','bin/blocktron-cli.js'),
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};