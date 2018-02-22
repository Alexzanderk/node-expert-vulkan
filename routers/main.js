const { Router } = require('express');
const bodyParser = require('body-parser');

const router = Router();

const { product, baseOrder } = require('../controllers');


router.use(bodyParser.json());

router.get('/', product.showCategoriesWithProducts);
router.post('/client', baseOrder.sendContacts);
router.post('/cart', baseOrder.sendCart);

module.exports = router;
