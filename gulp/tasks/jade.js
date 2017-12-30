'use strict';

module.exports = function() {
  $.gulp.task('jade', function() {
    return $.gulp.src($.path.template)
      .pipe($.gp.pug({ pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.public + '/static'))
  });
};
