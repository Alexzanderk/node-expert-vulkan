const { News } = require('../models');

module.exports = {

    // GET /news-catalog/
    async showNewsCatalog(req, res) {
        let news = await News.getAllNews();
        
        res.render('news-catalog', { 
            id: 'news-catalog',
            news 
        });
    },

    // GET /news-catalog/news/:id
    async showNews(req, res) {
        let newsOne = await News.getOne(req.params.id);
       
        res.render('news', { 
            id: 'news',
            newsOne 
        });
    }
}