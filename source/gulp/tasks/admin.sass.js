'use strict';

module.exports = function() {
  $.gulp.task('admin.sass', function() {
    return $.gulp.src('./source/style/admin.sass')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      // .pipe($.gp.postcss([$.lost]))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.public + '/css'))
      .pipe($.browserSync.stream());
  })
};
