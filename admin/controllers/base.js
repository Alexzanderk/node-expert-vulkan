const { Cart } = require('../../models');

module.exports = {
    // GET /admin/orders
    showClientsBase(req, res,next) {
        res.render('clients', {
            
        })
    },
    
    // GET /admin/orders/:id
    showOrder(req, res,next) {
        
    },
    
    // GET /admin/orders/:id/edit
    // POST /admin/orders/:id/edit
    showEditPage(req, res,next) {
        
    },

    updateOrder(req, res,next) {
        
    },
        
    // GET /admin/orders/:id/delete
    // POST /admin/orders/:id/delete
    showDeletePage(req, res,next) {
        
    },

    deleteOrder(req, res,next) {
        
    },
}