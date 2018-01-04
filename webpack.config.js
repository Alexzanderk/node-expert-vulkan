'use strict';

const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: {
        app: './source/js/index.js',
        google: './source/js/functions/google.js'
    },

    output: {
        filename: '[name].js'
    },

    // resolve: {
    //     extensions: [".js"],
    //     alias: {
    //         'google': './source/js/functions/google.js'
    //     }
    // },

    // plugins: [
    //     new webpack.ProvidePlugin({
    //         google: path.resolve(__dirname, 'source', 'js', 'functions', 'google.js')
    //     })
    // ],
    devtool: 'cheap-source-map'

}