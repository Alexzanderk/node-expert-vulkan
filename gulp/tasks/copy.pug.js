'use strict';

module.exports = function() {
  $.gulp.task('copy.pug', function() {
    return $.gulp.src('./source/template/**/*.*', { since: $.gulp.lastRun('copy.image') })
      .pipe($.gulp.dest($.config.views));
  });
};
