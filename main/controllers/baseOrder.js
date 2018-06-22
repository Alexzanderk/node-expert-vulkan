const { Cart, Client } = require('../../shared/models');
const { sendpulse: {send, sendpulse} } = require('../../shared/services');

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
            // console.log(req.body);

            let email = {
                html: '',
                text: `${req.body.email}`,
                subject: 'Заказ обратного звонка',
                from: {
                    name: 'rm1f6@ukrservice.biz',
                    email: 'rm1f6@ukrservice.biz'
                },
                to: [{
                    name: 'kotsarev.a@gmail.com',
                    email: 'kotsarev.a@gmail.com'
                }]
            };
            console.log(email);
    
            send(email)
                .catch(error);
                
            res.redirect('/');
                
        } catch (error) {
            next(error);
        }
    }
}