const express = require('express');
const path = require('path');
const logger = require('morgan');

const mainRoutes = require('./routes/main');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use('/', mainRoutes);

app.listen(3000, () => console.log('server worker...'));