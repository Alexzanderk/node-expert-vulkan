const { Products } = require('../../shared/models');

module.exports = {
    products: {
        get(req, res, next) {
            Products.find()
                .then(products => res.status(200).json(products))
                .catch(next);
        }
    }
};