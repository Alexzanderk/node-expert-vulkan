'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    template: require('./gulp/paths/template.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  webpackStream: require('webpack-stream'),
  webpack: require('webpack'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  concatcss: require('gulp-concat-css'),
  csso: require('postcss-csso'),
  postcss: require('postcss'),
  dataJson: require('./data/news'),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    // 'jade',
    'js.foundation',
    // 'js.process',
    'js.webpack',
    // 'css.foundation',
    'copy.image',
    'copy.fonts',
    'copy.pug'
  ),
  $.gulp.parallel(
    'watch',
    // 'serve'
  )
));

