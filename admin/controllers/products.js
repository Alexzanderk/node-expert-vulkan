const Products = require('../../models/Products');
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
    showAllProducts(req, res){
        res.render('products', {
            
        })
    },


    // GET /admin/products/create  -  showCreatePage
    showCreatePage(req, res){
        res.render('products/form', {
            
        })
    },
    
    // POST /admin/products/create  -  createProduct
    createProduct(req, res){

    },


    // GET /admin/products/:id/edit - showEditPage
    showEditPage(req, res){
        res.render('products', {
            
        })
    },
    
    // POST /admin/products/:id/edit - updateProduct
    updateProduct(req, res){

    },


    // GET /admin/products/:id/delete - showDeletePage
    showDeletePage(req, res){
        res.render('products', {
            
        })
    },
    
    // POST /admin/products/:id/delete - deleteProduct
    deleteProduct(req, res){

    }
};