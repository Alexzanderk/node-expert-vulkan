'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    // $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.webpack'));
    $.gulp.watch('./source/style/**/*.sass', $.gulp.series('sass'));
    $.gulp.watch('./source/style/admin.sass', $.gulp.series('admin.sass'));
    $.gulp.watch(['./source/template/**/*.pug', '!./source/template/admin/**/*.pug'], $.gulp.series('copy.pug'));
    $.gulp.watch('./source/template/admin/**/*.pug', $.gulp.series('admin.pug'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy.image'));
  });
};
