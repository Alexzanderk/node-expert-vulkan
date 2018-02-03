const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Client = new Schema({
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    adress: { type: String },
}, {
        timestamps: true

    });

module.exports = mongoose.model('Client', Client);