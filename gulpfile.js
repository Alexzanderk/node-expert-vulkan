'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./source/gulp/config'),
  path: {
    task: require('./source/gulp/paths/tasks.js'),
    template: require('./source/gulp/paths/template.js'),
    jsFoundation: require('./source/gulp/paths/js.foundation.js'),
    cssFoundation: require('./source/gulp/paths/css.foundation.js'),
    app: require('./source/gulp/paths/app.js')
  },
  gulp: require('gulp'),
  webpackStream: require('webpack-stream'),
  webpack: require('webpack'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  concatcss: require('gulp-concat-css'),
  csso: require('postcss-csso'),
  postcss: require('postcss'),
  // dataJson: require('./data/news'),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  'admin.clean',
  $.gulp.parallel(
    'sass',
    'admin.sass',
    // 'jade',
    'js.foundation',
    // 'js.process',
    'js.webpack',
    // 'css.foundation',
    'copy.image',
    'copy.fonts',
    'copy.pug',
    'admin.pug'
  ),
  $.gulp.parallel(
    'watch',
    // 'serve'
  )
));

