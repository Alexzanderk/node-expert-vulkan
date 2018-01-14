'use strict';

module.exports = function() {
  $.gulp.task('admin.clean', function(cb) {
    return $.rimraf($.config.adminViews, cb);
  });
};