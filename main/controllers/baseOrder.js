const { Cart, Client } = require('../../shared/models');

module.exports = {

    //POST /cart
    async sendCart(req, res, next) {
        try {
            await Cart.create(req.body);
            
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    },

    //POST /client
    async sendContacts(req, res, next) {
        try {
            await Client.create(req.body);
            res.redirect('/')
        } catch (error) {
            next(error);
        }
    }
}