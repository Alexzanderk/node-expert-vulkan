const express = require('express');
const path = require('path');

const admin = express();

const routers = require('./routers');

admin.set('views', path.join(__dirname, 'views'));
admin.set('view engine', 'pug');

admin.on('mount', server => {
    admin.locals = Object.assign(server.locals, admin.locals);
});

admin.use('/:entity*', (req, res, next) => {
    res.locals.id = `admin-${req.params.entity}`;
    res.locals.currentUrl = `/admin/${req.params.entity}`;
    res.locals.entity = req.params.entity;
    next();
});

admin.use('/', routers.home);
admin.use('/news', routers.news);
admin.use('/products', routers.products);



module.exports = admin;