const router = require('express').Router();

const { 
    news: { showAllNews, showCreatePage, createNews, showOneNews, showEditPage, updateNews, showDeletePage, deleteNews } 
} = require('../controllers');


// GET admin/news  -  show all news
router.get('/', showAllNews);

// GET /admin/news/create  -  showCreatePage
// POST /admin/news/create  -  createNews
router.route('/create')
    .get(showCreatePage)
    .post(createNews);

// GET /admin/news/:id  - show news
router.get('/:id', showOneNews);

// GET /admin/news/:id/edit - show news edit page
// POST /admin/news/:id/edit - update news
router.route('/:id/edit')
    .get(showEditPage)
    .post(updateNews);

// GET /admin/news/:id/delete - show news delete page
// POST /admin/news/:id/delete - delete news
router.route('/:id/delete')
    .get(showDeletePage)
    .post(deleteNews);


module.exports = router;