var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

 
gulp.task('sass', function () {
  return gulp.src('./sass/styles.scss')
  	.pipe(sourcemaps.init())

    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))     

    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', ['sass'], function () {
  gulp.watch(['./sass/**/*.scss', './sass/**/*.scss'], ['sass']);
});