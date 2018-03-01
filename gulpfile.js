'use strict';

global.$ = {
    gulp        : require('gulp'),
    gp          : require('gulp-load-plugins')(),
    browserSync : require('browser-sync').create(),
    del	      : require('del'),

    path : {
        tasks   : require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('sass:dev', 'pug', 'jquery', 'libs:dev', 'scripts', 'img:dev', 'fonts')));


$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('pug', 'jquery', 'fonts' ,'sass:build', 'libs:build', 'scripts', 'img:build', 'svg:copy'),
    $.gulp.parallel('watch', 'browser-sync')
));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel('watch', 'browser-sync')
));

