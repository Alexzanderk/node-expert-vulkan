const news = require('../data/news');

module.exports = {

    // GET /news-catalog/
    showNewsCatalog(req, res) {
        res.render('news-catalog', { 
            id: 'news-catalog',
            news 
        });
    },

    // GET /news-catalog/news/:id
    showNews(req, res) {
        let newsOne = news.find(newsOne => newsOne.id == req.params.id);
        res.render('news', { 
            id: 'news',
            newsOne 
        });
    }
}
