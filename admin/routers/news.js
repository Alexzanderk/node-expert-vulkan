const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const { 
    news: { showAllNews, showCreatePage, createNews, showOneNews, showEditPage, updateNews, showDeletePage, deleteNews } 
      } = require('../controllers');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..', '..', 'public', 'upload'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +'-' + file.originalname);
    }
})

const upload = multer({ storage: storage })


router.param('id', showOneNews);

// GET admin/news  -  show all news
router.get('/', showAllNews);

// GET /admin/news/create  -  showCreatePage
// POST /admin/news/create  -  createNews
router.route('/create')
    .get(showCreatePage)
    .post(upload.single('upload'), createNews);

// GET /admin/news/:id  - show news
// router.get('/:id', showOneNews);

// GET /admin/news/:id/edit - show news edit page
// POST /admin/news/:id/edit - update news
router.route('/:id/edit')
    .get(showEditPage)
    .post(upload.single('upload'), updateNews);

// GET /admin/news/:id/delete - show news delete page
// POST /admin/news/:id/delete - delete news
router.route('/:id/delete')
    .get(showDeletePage)
    .post(deleteNews);


module.exports = router;