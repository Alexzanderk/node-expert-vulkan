'use strict';

module.exports = function() {
  $.gulp.task('svg', function() {
    return $.gulp.src($.path.svgpath)
      .pipe($.gp.svgstore()) 
      .pipe($.gulp.dest($.config.public + '/img'));
  });
};
