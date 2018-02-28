const { Router } = require('express');
const bodyParser = require('body-parser');
const router = Router();

const { product: { productsIndex, showProductsCatalog, showProduct } } = require('../controllers');

router.get('/', showProductsCatalog);

router.get('/product/:id', showProduct);

module.exports = router;
