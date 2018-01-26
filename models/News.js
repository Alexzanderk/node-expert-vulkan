const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const News = new Schema({
    title: String,
    upload: { type: String },
    description: String,
    content: String,
    publishDate: { type: Date },
    published: { type: Boolean },
}, {
        timestamps: true

    });

module.exports = mongoose.model('News', News);