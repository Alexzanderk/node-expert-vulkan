const { Cart } = require('../../models');
const moment = require('moment');

module.exports = {
    async findOrder(req, res, next, id) {
        try {
            let order = await Cart.findById(id);
            req.order = order;
            next();
        } catch (error) {
            next(error);
        }
    },


    // GET /admin/orders
    async showOrders(req, res, next) {
        try {
            let orders = await Cart.find(req.query);
            res.render('orders', {
                orders,
                moment
            });
        } catch (error) {
            next(error);
        }
    },
    

    // GET /admin/orders/:id
    async showOrder(req, res, next) {
        try {
            res.render('orders/order', {
                order: req.order,
                moment
            });
        } catch (error) {
            next(error);
        }
    
    },

    // GET /admin/orders/:id/edit
    showEditPage(req, res, next) {
        
    },
    
    // POST /admin/orders/:id/edit
    async updateOrder(req, res, next) {
        try {
            let orderStatus = req.body.closeOrder === undefined ? false : true;
            let orderData = Object.assign({}, req.body, {closeOrder: orderStatus});
            
            await Cart.findOneAndUpdate({_id: req.order.id}, orderData);
            res.redirect('/admin/orders');
        } catch (error) {
            next(error);
        }
    },
        
    // GET /admin/orders/:id/delete  --  showDeletePage
    // POST /admin/orders/:id/delete  --  deleteOrder
    showDeletePage(req, res, next) {
        res.render('orders/delete', {

        })
    },

    async deleteOrder(req, res, next) {
        try {
            await req.order.remove();
            res.redirect('/admin/orders');
        } catch (error) {
            next(error);
        }
    },
}