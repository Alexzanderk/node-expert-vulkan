'use strict';

module.exports = function () {
    $.gulp.task('js.webpack', function () {
        return $.gulp.src($.path.app)
            .pipe($.webpackStream({
                entry: {
                    app: './source/js/index.js',
                },
                output: {
                    filename: '[name].js',
                    // library: 'app'
                },
                devtool: "source-map",
            }))
            .pipe($.gulp.dest($.config.public + '/js'))
    })
};
