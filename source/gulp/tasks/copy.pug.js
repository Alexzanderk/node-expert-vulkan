'use strict';

module.exports = function() {
  $.gulp.task('copy.pug', function() {
    return $.gulp.src(['./source/template/**/*.*', '!./source/template/admin/**/*.pug'], { since: $.gulp.lastRun('copy.pug') })
      .pipe($.gulp.dest($.config.views));
  });
};
