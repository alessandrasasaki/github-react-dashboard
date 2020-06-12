'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./static/sass/style.sass')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./static/css'));
  });

gulp.task('sass:watch', function () {
  return gulp.watch('./static/sass/style.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series(gulp.parallel('sass', 'sass:watch')));
