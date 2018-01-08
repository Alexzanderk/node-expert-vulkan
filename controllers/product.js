const { Product } = require('../models')

module.exports = {

    //GET /
    async productsIndex(req, res) {
        let products = await Product.getAllProducts();

        res.render('index', { 
            id: 'front-page',
            products 
        });
    },

    //GET /product-catalog/
    async showProductsCatalog(req, res) {
        let products = await Product.getAllProducts();

        res.render('product-catalog', { 
            id: 'product-catalog',
            products 
        });
    },

    //GET /product-catalog/product/:alias
    async showProduct(req, res) {
        let products = await Product.getAllProducts();
        let product = await Product.getOne(req.params.alias);
        
        res.render('product', { 
            id: 'product',
            products,
            product
         });
    }
}