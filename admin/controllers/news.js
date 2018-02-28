const News = require('../../shared/models/News');
const moment = require('moment');
const path = require('path');

const NUMBER_OF_NEWS_TO_SHOW = 10;

module.exports = {
    // GET admin/news  -  show all news
    async showAllNews(req, res, next) {
        try {
            let newsAll = !req.query.published ? await News.find() : await News.find({published : req.query.published});
            
            let limit = req.query.limit || NUMBER_OF_NEWS_TO_SHOW;
            let page = req.query.page || 1;
            let startIndex = page * limit - limit;
            let endIndex = +startIndex + +limit;

            res.render('news', {
                newsAll: newsAll.slice(startIndex, endIndex),
                totalNewsCount: newsAll.length,
                limit: 10,
                page: req.query.page,
                moment,
                published: req.query.published
            });
        } catch (error) {
            next(error);
        }
    },

    // GET /admin/news/create  -  showCreatePage
    showCreatePage(req, res) {
        res.render('news/form', {
            oneNews: new News()
        });
    },
    
    // POST /admin/news/create  -  createNews
    async createNews(req, res, next) {
        try {
            await News.create({
                title: req.body.title,
                upload: req.file ? '/' + req.file.fieldname + '/' + req.file.filename : '',
                description: req.body.description,
                content: req.body.content,
                publishDate: req.body.publishDate,
                published: req.body.published === undefined ? false : true
            });

            res.redirect('/admin');
        } catch (error) {
            next(error);
        }
    },


    // GET /admin/news/:id  - show news
    async showOneNews(req, res, next, id) {
        try {
            let oneNews = await News.findById(id);
            req.oneNews = oneNews;
            
            next();
        } catch (error) {
            next(error);
        }
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