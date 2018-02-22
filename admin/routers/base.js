const router = require('express').Router();
const { base } = require('../controllers');

router.param('id', base.findClient);

// GET /admin/orders
router.get('/', base.showClientsBase);

// GET /admin/orders/:id/edit
// POST /admin/orders/:id/edit
router.route('/:id/edit')
    .get(base.showEditPage)
    .post(base.updateClient);

// GET /admin/orders/:id/delete
// POST /admin/orders/:id/delete
router.route('/:id/delete')
    .get(base.showDeletePage)
    .post(base.deleteClient);

module.exports = router;