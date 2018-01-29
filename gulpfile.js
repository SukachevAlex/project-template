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
    $.gulp.parallel('sass:dev', 'pug', 'scripts', 'img:dev', 'fonts')));


$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('pug', 'fonts' ,'sass:build', 'scripts:lib', 'scripts', 'img:build'),
    $.gulp.parallel('watch', 'browser-sync')
));

$.gulp.task('default', $.gulp.series(
    'dev',
     $.gulp.parallel('watch', 'browser-sync')
));

