const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Client = new Schema({
    contactName: String,
    contactPhone: {type: Number, set: v => Math.round(v)},
    email: String,
    adress: String,
    notes: String,
    date: Date
}, {
        timestamps: true

    });

module.exports = mongoose.model('Client', Client);