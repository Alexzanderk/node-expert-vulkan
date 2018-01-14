'use strict';

module.exports = function () {
    $.gulp.task('js.webpack', function () {
        return $.gulp.src($.path.app)
            .pipe($.webpackStream({
                entry: {
                    app: './source/js/index.js',
                    google: './source/js/functions/google.js',
                },
                output: {
                    filename: '[name].js',
                    // library: 'app'
                },
                externals: {
                    $: 'jQuery'
                  },
                devtool: "source-map",
            }))
            .pipe($.gulp.dest($.config.public + '/js'))
    })
};
