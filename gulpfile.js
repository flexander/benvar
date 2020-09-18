var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

function css() {
    return gulp.src(['./src/scss/env/**/*.scss'])
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'));
}

gulp.task('css', css);

gulp.task('watch', function() {
    return gulp.watch('./src/scss/**/*.scss', css);
});

gulp.task('default', gulp.series(['css', 'watch']));
