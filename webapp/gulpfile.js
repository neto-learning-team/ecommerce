const concat = require('gulp-concat');
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src(['front/src/public/stylesheets/style.css'])
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('front/src/public/stylesheets'));
});

gulp.task('watch', function () {
    gulp.watch(['front/src/**/*.css', '!front/src/public/stylesheets/style.css'], gulp.series('concat', 'minify-css'));
});

gulp.task('concat', function () {
    return gulp.src(['front/src/**/*.css', 'node_modules/@fortawesome/**/*.css', '!front/src/public/stylesheets/style.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('front/src/public/stylesheets/'))
});

gulp.task('default', gulp.series('concat', 'minify-css', 'watch'));