const News = require('../../models/News');
const moment = require('moment');
const path = require('path');

module.exports = {
    // GET admin/news  -  show all news
    showAllNews(req, res, next) {
        News.find(req.query)
            .then(newsAll => {
                res.render('news', {
                    newsAll,
                    moment
                });
            })
            .catch(next);
    },

    // GET /admin/news/create  -  showCreatePage
    showCreatePage(req, res) {
        res.render('news/form', {
            oneNews: new News()
        });
    },
    
    // POST /admin/news/create  -  createNews
    createNews(req, res, next) {
        console.log(req.file);
        News.create({
            title: req.body.title,
            upload: req.file ? '/' + req.file.fieldname + '/' + req.file.filename : '',
            description: req.body.description,
            content: req.body.content,
            publishDate: req.body.publishDate,
            published: req.body.published === undefined ? false : true
        })
            .then(() => res.redirect('/admin/news'))
            .catch(next);
    },


    // GET /admin/news/:id  - show news
    showOneNews(req, res, next, id) {
        News.findById(id)
            .then(oneNews => {
                req.oneNews = oneNews;
                next();
            })
            .catch(next);

    },


    // GET /admin/news/:id/edit - show news edit page
    showEditPage(req, res) {
        res.render('news/form', {
            oneNews: req.oneNews,
            moment
        })
    },

    // POST /admin/news/:id/edit - update news
    updateNews(req, res, next) {
        News.findOneAndUpdate({ _id: req.oneNews.id }, {
            title: req.body.title,
            upload: (req.file) ? '/' + req.file.fieldname + '/' + req.file.filename : req.oneNews.upload,
            description: req.body.description,
            content: req.body.content,
            publishDate: req.body.publishDate,
            published: req.body.published === undefined ? false : true
        })
        .then( news => res.redirect('/admin/news'))
        .catch(next);
        },


    // GET /admin/news/:id/delete - show news delete page
    showDeletePage(req, res) {
        res.render('news/delete', {
            oneNews: req.oneNews
        })
    },

    // POST /admin/news/:id/delete - delete news
    deleteNews(req, res, next) {
        req.oneNews.remove()
            .then(() => res.redirect('/admin/news'))
            .catch(next)
    },
};