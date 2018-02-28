const { News } = require('../../shared/models');
const moment = require('moment');

const NUMBER_OF_NEWS_TO_SHOW = 10;

module.exports = {

    // GET /news-catalog/
    async showNewsCatalog(req, res) {
        let news = await News.find({published: true});
        
        let limit = req.query.limit || NUMBER_OF_NEWS_TO_SHOW;
        let page = req.query.page || 1;
        let startIndex = page * limit - limit;
        let endIndex = +startIndex + +limit;
        
        res.render('news-catalog', { 
            id: 'news-catalog',
            news: news.slice(startIndex, endIndex),
            totalNewsCount: news.length,
            limit: 10,
            page: req.query.page,
            moment
            
        });
    },

    // GET /news-catalog/news/:id
    async showNews(req, res) {
        let newsOne = await News.findById(req.params.id);
        
        res.render('news', { 
            id: 'news',
            newsOne,
            moment
        });
    }
}