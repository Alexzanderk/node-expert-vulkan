const express = require('express');
const path = require('path');

const routers = require('./routers');

const main = express();

main.set('views', path.join(__dirname, 'views'));
main.set('view engine', 'pug');

main.on('mount', server => {
    main.locals = Object.assign(server.locals, main.locals);
});

main.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

main.use('/', routers.main);
main.use('/news-catalog', routers.news);
main.use('/product-catalog', routers.product);
main.use('/auth', routers.auth);


module.exports = main;