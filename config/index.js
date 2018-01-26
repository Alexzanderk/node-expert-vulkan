'use srtict';

const path = require('path');

module.exports = {
    version: '1.0.1',
    port: process.env.PORT || 3000,
    paths: {
        views: path.resolve(__dirname, '..', 'views'),
        public: path.resolve(__dirname, '..', 'public'),
        lib: path.resolve(__dirname, '..', 'node_modules'),
        sourceTemplate: path.resolve(__dirname, '..', 'source', 'template')
    },
    mongodbUrl: 'mongodb://localhost:27017/vulkan',
    mongodbMlab: process.env.MONGODB_MLAB_URL

};