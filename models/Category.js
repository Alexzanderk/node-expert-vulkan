const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Category = new Schema({
    _id: String,
    title: String,
    uploadImg: { type: String },
    description: String,
    published: {type: Boolean}
}, {
        toJSON: { virtuals: true },
        timestamps: true,

    });


    Category.virtual('products', {
        ref: 'Products', // The model to use
        localField: '_id', // Find people where `localField`
        foreignField: 'category', // is equal to `foreignField`
      });

module.exports = mongoose.model('Category', Category);