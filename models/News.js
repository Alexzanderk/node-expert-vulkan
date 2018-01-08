const news = require('../data/news');

class News {
    static getAllNews() {
        return Promise.resolve(news);
    }

    static getOne(id) {
        return Promise.resolve(news.find(newsOne => newsOne.id == id));
    }
    
    constructor() {
        
    }
}

module.exports = News;