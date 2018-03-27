const express = require('express');
const router = require('express').Router();
const routers = require('./routers');

const api = express();

api.use('/products', routers.products);


module.exports = api;