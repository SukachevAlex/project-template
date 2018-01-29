module.exports = function () {
    $.gulp.task('pug', function(){
        return $.gulp.src('app/pages/*.pug')
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('dist'))
            .on('end', $.browserSync.reload);
    });
};