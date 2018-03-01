module.exports = function () {
    $.gulp.task('img:dev', function(){
        return $.gulp.src('app/img/**/*.*')
            .pipe($.gulp.dest('dist/img'))
    });
    $.gulp.task('img:build', function(){
        return $.gulp.src('app/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('jBzE-rB2BCcnZwycya8wRLkR8_KIjlZe'))
            .pipe($.gulp.dest('dist/img'))
    });
    $.gulp.task('svg:copy', function(){
        return $.gulp.src('app/img/svg/*.svg')
            .pipe($.gulp.dest('dist/img/svg/'))
    });

};

