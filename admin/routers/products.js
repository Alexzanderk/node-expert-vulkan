const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const { 
    products: { showAllProducts, showCreatePage, showCreateCategoryPage, createCategory,  createProduct, showProduct, showEditPage, updateProduct, showDeletePage, deleteProduct } 
      } = require('../controllers');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..', '..', 'public', 'upload', 'products'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +'-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const storageCategory = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..', '..', 'public', 'upload', 'products', 'category'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() +'-' + file.originalname);
    }
});

const uploadCategory = multer({ storage: storageCategory });

router.param('id', showProduct);

// GET admin/products  -  showAllProducts
router.get('/', showAllProducts);

// GET /admin/products/create  -  showCreatePage
// POST /admin/products/create  -  createProduct
router.route('/create')
.get(showCreatePage)
.post(upload.single('uploadImg'), createProduct);

// GET /admin/products/:id/edit - showEditPage
// POST /admin/products/:id/edit - updateProduct
router.route('/:id/edit')
    .get(showEditPage)
    .post(upload.single('uploadImg'), updateProduct);

// GET /admin/products/:id/delete - showDeletePage
// POST /admin/products/:id/delete - deleteProduct
router.route('/:id/delete')
    .get(showDeletePage)
    .post(deleteProduct);



// GET /admin/products/create-category
// POST '/admin/products/create-category'
router.route('/create-category')
.get(showCreateCategoryPage)
.post(uploadCategory.single('uploadImg'), createCategory);


module.exports = router;