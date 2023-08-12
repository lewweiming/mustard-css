const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('serve', function () {
    browserSync.init({
        server: './'
    });
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('src/scss/mustard-ui.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.series('serve', 'sass'));
