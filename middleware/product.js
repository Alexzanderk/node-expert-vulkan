const products = require('../data/products');

module.exports = {
    findProduct(req, res, next) {
        let productAlias = req.params.alias;
        let product;

        for (const key in products) {
            if (products[key].products.find(element => element.alias === productAlias)) {
                product = products[key].products.find(element => element.alias === productAlias);
            }
        }

        if (!product) {
            let error = new Error('Продукт не найдена');
            error.status = 404;
            next(error);
        } else {
            req.product = product;

            next();
        }
    },

};