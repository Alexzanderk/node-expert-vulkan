const { Router } = require('express');
const bodyParser = require('body-parser');
const router = Router();

const { cart: { cartOrder } } = require('../controllers');

router.use(bodyParser.json());

router.post('/', cartOrder);

module.exports = router;
