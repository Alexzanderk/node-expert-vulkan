const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/news-catalog', (req, res) => {
    res.render('news-catalog-tpl');
});

router.get('/news-catalog/news', (req, res) => {
    res.render('news-tpl');
});

router.get('/product-catalog', (req, res) => {
    res.render('product-catalog-tpl');
});

router.get('/product-catalog/product', (req, res) => {
    res.render('product-tpl');
});

module.exports = router;
