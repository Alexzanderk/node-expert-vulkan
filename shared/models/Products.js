const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductProperty = new Schema({
    icon: String,
    value: String,
    name: String
  });

const Products = new Schema({
    title: String,
    slug: {type: String, trim: true, unique: true},
    uploadImg: { type: String },
    description: String,
    category: {type: String, ref: 'Category'},
    model: String,
    article: {type: Number, default: '00000'},
    price: Number,
    published: {type: Boolean},
    description: {type: String},
    icons: {type: Array, enum: ['box', 'weight', 'wallet', 'arrow_10', 'water']},
    properties: [ProductProperty]
}, {
    toObject: { getters: false, virtuals: true },
    toJSON: { versionKey: false, getters: true },
    timestamps: true
    });

module.exports = mongoose.model('Products', Products);