module.exports = function () {
    $.gulp.task('watch', function(){
        $.gulp.watch('./app/pages/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./app/styles/**/*.sass', $.gulp.series('sass:dev'));
        $.gulp.watch('./app/scripts/**/*.js', $.gulp.series('libs:dev', 'scripts'));
        $.gulp.watch('./app/img/**/*.*', $.gulp.series('img:dev'));
    });
};
