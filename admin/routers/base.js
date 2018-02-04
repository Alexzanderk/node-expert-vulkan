const router = require('express').Router();
const { base: { showClientsBase, showOrder, showEditPage, updateOrder, showDeletePage, deleteOrder } } = require('../controllers');

// GET /admin/orders
router.get('/', showClientsBase);

// GET /admin/orders/:id
router.get('/order/:id', showOrder);

// GET /admin/orders/:id/edit
// POST /admin/orders/:id/edit
router.route('/order/:id/edit')
    .get(showEditPage)
    .post(updateOrder);

// GET /admin/orders/:id/delete
// POST /admin/orders/:id/delete
router.route('/order/:id/delete')
    .get(showDeletePage)
    .post(deleteOrder);

module.exports = router;