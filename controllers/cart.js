const { Cart } = require('../models');

module.exports = {

    //POST /cart
    cartOrder(req, res, next) {
        Cart.create(req.body)
            .then(() => res.redirect('/'))
            .catch(next);
    }

}