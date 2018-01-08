const { Router } = require('express');
const bodyParser = require('body-parser');
const router = Router();

const { product: { productsIndex, showProductsCatalog, showProduct } } = require('../controllers');
const { product: { findProduct, findCategory } } = require('../middleware');

router.get('/', showProductsCatalog);

router.get('/product/:alias', showProduct);

module.exports = router;
