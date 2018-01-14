const {} = require('../../models/News');

module.exports = {
    // GET admin/news  -  show all news
    showAllNews(req, res) {
        res.render('news', {
            id: 'admin',
            currentUrl: req.originalUrl
        })
    },

    // GET /admin/news/create  -  showCreatePage
    showCreatePage(req, res) {
        res.render('news/create', {
            
        });
    },

    // POST /admin/news/create  -  createNews
    createNews(req, res) {

    },


    // GET /admin/news/:id  - show news
    showOneNews(req, res) {

    },


    // GET /admin/news/:id/edit - show news edit page
    showEditPage(req, res) {

    },

    // POST /admin/news/:id/edit - update news
    updateNews(req, res) {

    },


    // GET /admin/news/:id/delete - show news delete page
    showDeletePage(req, res) {

    },

    // POST /admin/news/:id/delete - delete news
    deleteNews(req, res) {

    },


};