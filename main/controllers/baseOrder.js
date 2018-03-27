const { Cart, Client } = require('../../shared/models');
const { sendpulse } = require('../../shared/services');

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
            console.log(req.body);

// @codedojo
            let cb = function cb(data) {
                console.log(data);
            };

            let email = {
                html: '',
                text: req.body,
                subject: 'Заказ обратного звонка',
                from: [req.body.email],
                to: ['kotsarev.a@gmail.com'],
                bcc: [],
                attachments: []
            };

            sendpulse.smtpSendMail(cb, email);

            
            res.redirect('/')
        } catch (error) {
            next(error);
        }
    }
}