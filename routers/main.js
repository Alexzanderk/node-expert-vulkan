const { Router } = require('express');
const bodyParser = require('body-parser');
const router = Router();

const newsController = require('../controllers/news');
const productsController = require('../controllers/product');
const cartController = require('../controllers/cart');
const { findProduct, findCategory } = require('../middleware/product');

router.use(bodyParser.json());

router.get('/', productsController.productsIndex);

router.get('/news-catalog', newsController.showNewsCatalog);

router.get('/news-catalog/news/:id', newsController.showNews);

router.get('/product-catalog', productsController.showProductsCatalog);

router.get('/product-catalog/product/:alias', findProduct, productsController.showProduct);

router.post('/cart', cartController.cartOrder);

module.exports = router;
