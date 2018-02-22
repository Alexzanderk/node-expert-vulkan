const { Cart, Client } = require('../../models');
const moment = require('moment');

module.exports = {
    
    // GET /admin/base/:id
    async findClient(req, res, next, id) {
        try {
            let client = await Client.findById(id);
            req.client = client;
            next();
        } catch (error) {
            next(error);
        }
    },
    
    // GET /admin/base
    async showClientsBase(req, res,next) {
        try {
            let clients = await Client.find();
            res.render('clients', {
                clients,
                moment
            })
        } catch (error) {
            next(error);
        }
    },
    
    // GET /admin/base/:id/edit
    // POST /admin/base/:id/edit
    showEditPage(req, res, next) {
        res.render('clients/form', {
            client: req.client,
            moment
        });
    },

    async updateClient(req, res, next) {
        try {
            await Client.findOneAndUpdate({_id: req.client.id}, req.body);
            res.redirect('/admin/base');
        } catch (error) {
            next(error);
        }
    },
        
    // GET /admin/base/:id/delete
    // POST /admin/base/:id/delete
    showDeletePage(req, res,next) {
        res.render('clients/delete', {
            client: req.client,
            moment
        });
    },

    async deleteClient(req, res,next) {
        try {
          await req.client.remove();
          res.redirect('/admin/base');  
        } catch (error) {
            next(error);
        }
    },
}