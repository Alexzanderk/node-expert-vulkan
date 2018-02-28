const browserSync = require('browser-sync').create();

// proxy на локальный сервер на Express
browserSync.init({
    proxy: 'http://localhost:3000',
    startPath: '/admin/news?page=1&limit=10',
    notify: false,
    tunnel: false,
    host: 'localhost',
    port: 3000,
    logPrefix: 'Proxy to localhost:3000',
});
// обновляем страницу, если обновились public файлы
browserSync.watch('./public/**/*').on('change', browserSync.reload);
// обновляем страницу, если был изменен шаблона
browserSync.watch('./views/**/*').on('change', browserSync.reload);
browserSync.watch('./source/template/**/*').on('change', browserSync.reload);