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

    externals: {
        jquery: 'jQuery'
      },

    devtool: 'cheap-source-map'

}