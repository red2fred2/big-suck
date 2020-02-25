const gulp = require('gulp'),
      babel = require('gulp-babel'),
      sass = require('gulp-sass')
      sass.compiler = require('node-sass');

const compileJS = () =>
  gulp.src('webApp/src/*.js')
      .pipe(babel({
        presets: ['@babel/env', '@babel/preset-react']
      }))
      .pipe(gulp.dest('webApp/dist'))
gulp.task('babel', compileJS)
gulp.task('babel:watch', () => gulp.watch('webApp/src/*.js', compileJS))

const compileSass = () =>
  gulp.src('webApp/src/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('webApp/dist')
)
gulp.task('sass', compileSass)
gulp.task('sass:watch', () => gulp.watch('webApp/src/*.scss', compileSass))
