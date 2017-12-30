const express = require('express');
const path = require('path');
const browserSync = require('browser-sync').create();
const logger = require('morgan');

const config = require('./config');
const mainRoutes = require('./routers/main');

const app = express();

app.disable('view cache');

app.set('views', config.paths.views);
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use('/', mainRoutes);

// proxy на локальный сервер на Express
browserSync.init({
    proxy: 'http://localhost:3000',
    startPath: '/',
    notify: false,
    tunnel: false,
    host: 'localhost',
    port: 3000,
    logPrefix: 'Proxy to localhost:3000',
  });
  // обновляем страницу, если обновились assets файлы
  browserSync.watch('./public/**/*').on('change', browserSync.reload);
  // обновляем страницу, если был изменен исходник шаблона
  browserSync.watch('./source/template/**/*').on('change', browserSync.reload);
  browserSync.watch('./views/**/*').on('change', browserSync.reload);

  app.listen(config.port, () => console.log('server worker...', config.port));