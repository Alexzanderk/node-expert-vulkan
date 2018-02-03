const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartProducts = new Schema({
    quantity: Number,
    price: String,
    model: Number,
    article: Number,
    productName: String
  });

const Cart = new Schema({
    customerName: String,
    customerPhone: String,
    products: [cartProducts]
}, {
        timestamps: true
    });

module.exports = mongoose.model('Cart', Cart);