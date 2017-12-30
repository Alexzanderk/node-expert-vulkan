const products = require('../data/products');

module.exports = {

    //GET /
    productsIndex(req, res) {
        res.render('index', { products });
    },

    //GET /product-catalog/
    showProductsCatalog(req, res) {
        res.render('product-catalog', { products });
    },

    //GET /product-catalog/product/:alias
    showProduct(req, res) {
        res.render('product', { 
            products: products,
            product: req.product
         });
    }
}