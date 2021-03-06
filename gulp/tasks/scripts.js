module.exports = function() {

    $.gulp.task('libs:dev', function() {
        return $.gulp.src([
                ''
            ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('dist/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libs:build', function() {
        return $.gulp.src([
                '',
            ])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('dist/js/'));
    });

    $.gulp.task('scripts', function() {
        return $.gulp.src([
                './app/scripts/*.js',
                '!./app/scripts/libs.min.js'
            ])
            .pipe($.gulp.dest('dist/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

};