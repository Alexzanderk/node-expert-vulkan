const { Router } = require('express');
const router = Router();

const { news: { showNewsCatalog, showNews } } = require('../controllers');

router.get('/', showNewsCatalog);

router.get('/news/:id', showNews);

module.exports = router;
