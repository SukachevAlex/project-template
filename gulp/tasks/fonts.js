module.exports = function () {
    $.gulp.task('fonts', function(){
        return $.gulp.src('app/fonts/**/*.*')
            .pipe($.gulp.dest('dist/fonts'))
    });
};