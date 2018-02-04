const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartProducts = new Schema({
    quantity: Number,
    price: Number,
    model: String,
    article: Number,
    name: String
  });

const Cart = new Schema({
    customerName: String,
    customerPhone: String,
    customerAdress: {type: String},
    orderDate: Date,
    closeOrder: {type: Boolean},
    bill: String,
    notes: {type: String},
    products: [cartProducts]
}, {
        timestamps: true
    });

module.exports = mongoose.model('Cart', Cart);