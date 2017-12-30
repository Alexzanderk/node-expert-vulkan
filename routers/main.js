const { Router } = require('express');
const router = Router();

const newsController = require('../controllers/news');
const productsController = require('../controllers/product');
const { findProduct, findCategory } = require('../middleware/product');

router.get('/', productsController.productsIndex);

router.get('/news-catalog', newsController.showNewsCatalog);

router.get('/news-catalog/news/:id', newsController.showNews);

router.get('/product-catalog', productsController.showProductsCatalog);

router.get('/product-catalog/product/:alias', findProduct, productsController.showProduct);


module.exports = router;
