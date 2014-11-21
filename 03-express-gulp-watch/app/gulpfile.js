var gulp       = require('gulp');
var nodemon    = require('gulp-nodemon');
var sass       = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');

gulp.task('develop', function () {
  nodemon({script: './bin/www', ext: 'js hjs json', legacyWatch: true });
});

gulp.task('sass', function() {
  gulp
    .src('./public/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(livereload())
    .on('error', function (err) {
      console.log(err.message);
    })
  ;
});

gulp.watch('./public/scss/**/*.scss', ['sass']);

gulp.task('default', ['develop', 'sass']);
