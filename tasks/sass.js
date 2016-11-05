var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../gulp.config')();

gulp.task('sass', function () {
    return gulp.src(config.assetsPath.styles + 'main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(["last 2 versions", "iOS > 8", "Android 4"]))
        .pipe(gulp.dest(config.assets));
});

gulp.task('watch-sass', function () {
    gulp.watch(config.assetsPath.styles + '**/*.scss', ['sass']);
});
