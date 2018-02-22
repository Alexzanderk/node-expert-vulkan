const router = require('express').Router();
const { orders: { findOrder, showOrders, showOrder, showEditPage, updateOrder, showDeletePage, deleteOrder } } = require('../controllers');

router.param('id', findOrder);

// GET /admin/orders
router.get('/', showOrders);

// GET /admin/orders/:id
// POST /admin/orders/:id
router.route('/order/:id')
    .get(showOrder)
    .post(updateOrder);
    
// GET /admin/orders/:id/delete
// POST /admin/orders/:id/delete
router.route('/order/:id/delete')
    .get(showDeletePage)
    .post(deleteOrder);
    
// GET /admin/orders/:id/edit
// POST /admin/orders/:id/edit
router.route('/order/:id/:edit')
    .get(showEditPage)
    .post(updateOrder);


module.exports = router;