const products = require('../data/products');

class Product {
    static getAllProducts() {
        return Promise.resolve(products);
    }

    static getOne(alias) {
        let productAlias = alias;
        let product;

        for (const key in products) {
            if (products[key].products.find(element => element.alias === productAlias)) {
                product = products[key].products.find(element => element.alias === productAlias);
            }
        }
        
        return Promise.resolve(product);
    }
    
    constructor() {
        
    }
}

module.exports = Product;