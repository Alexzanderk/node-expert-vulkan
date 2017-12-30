'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      open: true,
      server: [$.config.build, $.config.public]
      // server: $.config.serverPath
    });

    // $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
    $.browserSync.watch([$.config.public + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
