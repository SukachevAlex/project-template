module.exports = function () {
    $.gulp.task('sass:dev', function(){
        return $.gulp.src('app/styles/*.*')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 15 versions'],
                cascade: false
            }))
            .on("error", $.gp.notify.onError({
                message: "Error: <%= error.message %>",
                title: "Error running something"
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.importCss())
            .pipe($.gulp.dest('dist/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });


    $.gulp.task('sass:build', function(){
        return $.gulp.src('app/styles/main.sass')
            .pipe($.gp.sass({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 15 versions'],
                cascade: false
            }))
            .pipe($.gp.csso())
            .pipe($.gp.importCss())
            .pipe($.gulp.dest('./dist/css/'))
    });
};