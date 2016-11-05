var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./tasks');

var config = require('./gulp.config')();

var env = process.env.NODE_ENV || 'development';

if (env === 'production') {

/* Deployment task */
gulp.task('default', ['build']);

} else {
  /* Default task */
  gulp.task('default', ['serve-dev']);
}
