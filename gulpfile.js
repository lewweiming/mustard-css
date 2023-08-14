const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sassVars = require('gulp-sass-vars');
const { Select } = require('enquirer');
const colors = require('ansi-colors');

gulp.task('serve', function () {
    browserSync.init({
        server: './'
    });
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('sass', async function () {

    // Define the replacement values
    var themeSettings = {
        'body-bg-color': '#ffffff', // Replace with your desired value
        'brand-color': '#000000', // Replace with another value
        'nav-link-color': 'white',
        // Add more variables and values as needed
    };

    const prompt = new Select({
        name: 'color',
        message: 'Pick a color for the Mustard UI theme',
        choices: ['white', 'black', 'yellow', 'blue', 'red'].map(n => ({
            name: n,
            message: colors[n](n)
        }))
    });


    let response = await prompt.run();

    console.log(response)

    // Change themeSettings based on user response
    switch (response) {
        case 'white':
            themeSettings['body-bg-color'] = '#ffffff';
            themeSettings['brand-color'] = '#ffffff';
            themeSettings['nav-link-color'] = 'black';
            console.log("You've selected white!")
            break;
        case 'black':
            themeSettings['body-bg-color'] = '#ffffff';
            themeSettings['brand-color'] = '#000000';
            console.log("You've selected black!")
            break;
        case 'yellow':
            themeSettings['body-bg-color'] = '#ffffff';
            themeSettings['brand-color'] = '#ffeb3b';
            console.log("You've selected yellow!")
            break;
        case 'blue':
            themeSettings['body-bg-color'] = '#ffffff';
            themeSettings['brand-color'] = '#2196f3';
            console.log("You've selected blue!")
            break;
        case 'red':
            themeSettings['body-bg-color'] = '#ffffff';
            themeSettings['brand-color'] = '#f44336';
            console.log("You've selected red!")
            break;
        default:
        // Do nothing
    }

    return gulp.src('src/scss/mustard-ui.scss')
        .pipe(sourcemaps.init())
        .pipe(sassVars(themeSettings, { verbose: true }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream())
    });

    

gulp.task('default', gulp.series('serve', 'sass'));
