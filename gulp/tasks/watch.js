'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    // $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.webpack'));
    $.gulp.watch('./source/style/**/*.sass', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('jade'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('copy.pug'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy.image'));
  });
};
