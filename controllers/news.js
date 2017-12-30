const news = require('../data/news');

module.exports = {
    showNewsCatalog(req, res) {
        res.render('news-catalog', { news });
    },

    showNews(req, res) {
        let newsOne = news.find(newsOne => newsOne.id == req.params.id);
        res.render('news', { newsOne });
    }
}
