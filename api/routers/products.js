const router = require('express').Router();
const { products } = require('../controllers');

router.route('/')
    .get(products.get);

// router.route('/products/:id')
//     .get();

module.exports = router;