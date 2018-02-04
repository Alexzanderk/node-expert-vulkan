const {Products, Category} = require('../../models');
const moment = require('moment');
const path = require('path');

module.exports = {
    showProduct(req, res, next, id) {
        Products.findById(id)
            .then(product => {
                req.product = product;
                next();
            })
            .catch(next);
    },

    // GET admin/products  -  showAllProducts
    showAllProducts(req, res, next) {
        Products.find(req.query)
            .then(products => {
                Category.find()
                    .then(category => {
                        res.render('products', {
                            products,
                            category,
                            moment
                        });
                    })
                    .catch(next);
            })
            .catch(next);
    },


    // GET /admin/products/create  -  showCreatePage
    showCreatePage(req, res, next) {
        Category.find()
            .then(category => {
                res.render('products/form', {
                    product: new Products(),
                    category
                })
            })
    },

    // POST /admin/products/create  -  createProduct
    createProduct(req, res, next) {
        const icons = req.body.icon;
        const names = req.body.name || [];
        const values = req.body.value;
        let propertiesObjects = [];
        let uploadImg = (req.file) ? '/upload/products/' + req.file.filename : '';
        let published = req.body.published === undefined ? false : true;
        let article = req.body.article === null ? '00000' : req.body.article;

        for (let i = 0; i < names.length; i++) {
            let obj = {};
            obj.icon = icons[i];
            obj.name = names[i];
            obj.value = values[i]
            propertiesObjects.push(obj);
        }

        let productData = Object.assign({}, req.body, { published: published, article: article }, { uploadImg: uploadImg }, { properties: propertiesObjects })

        Products.create(productData)
            .then(() => res.redirect('/admin/products'))
            .catch(next)
    },

    // GET /admin/products/create-category
    showCreateCategoryPage(req, res) {
        res.render('products/category', {
            category: new Category()
        })
    },

    // POST '/admin/products/create-category'
    createCategory(req, res, next) {
        let uploadImg = (req.file) ? '/upload/products/category/' + req.file.filename : '';
        let categoryData = Object.assign({}, req.body, {uploadImg});

        Category.create(categoryData)
            .then(category => {
                res.redirect('/admin/products')
            })
            .catch(next);
    },

    // GET /admin/products/:id/edit - showEditPage
    showEditPage(req, res, next) {
        Category.find()
            .then(category => {
               
                Products.findById(req.params.id)
                    .populate('Category')
                    .then(product => {
                        res.render('products/form', {
                            product,
                            category
                        });
                    
                    })
                    .catch(next);
           
                })
            .catch(next);
    },

    // POST /admin/products/:id/edit - updateProduct
    updateProduct(req, res, next) {
        const icons = req.body.icon;
        const names = req.body.name || [];
        const values = req.body.value;
        let propertiesObjects = [];
        let uploadImg = (req.file) ? '/upload/products/' + req.file.filename : req.product.uploadImg;
        let published = req.body.published === undefined ? false : true;
        let article = req.body.article === null ? ' ' : req.body.article;

        for (let i = 0; i < names.length; i++) {
            let obj = {};
            obj.icon = icons[i];
            obj.name = names[i];
            obj.value = values[i]
            propertiesObjects.push(obj);
        }

        
        let productData = Object.assign({}, req.body, { article: article, published: published }, { uploadImg: uploadImg }, { properties: propertiesObjects })

        Products.findOneAndUpdate({ _id: req.product.id }, productData)
            .then(product => res.redirect('/admin/products'))
            .catch(next);
    },


    // GET /admin/products/:id/delete - showDeletePage
    showDeletePage(req, res) {
        res.render('products/delete', {
            
        })
    },
    
    // POST /admin/products/:id/delete - deleteProduct
    deleteProduct(req, res, next) {
        req.product.remove()
            .then(() => res.redirect('/admin/products'))
            .catch(next)
    }
};