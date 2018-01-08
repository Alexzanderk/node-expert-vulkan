const { Router } = require('express');
const router = Router();

const { product: { productsIndex, showProductsCatalog, showProduct } } = require('../controllers');

router.get('/', productsIndex);

module.exports = router;
