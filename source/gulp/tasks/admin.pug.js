'use strict';

module.exports = function() {
  $.gulp.task('admin.pug', function() {
    return $.gulp.src('./source/template/admin/**/*.pug')
      .pipe($.gulp.dest($.config.adminViews));
  });
};
