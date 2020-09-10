var gulp = require('gulp');
var sass = require('gulp-sass');

function css() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
}

gulp.task('css', css);

gulp.task('watch', function() {
    return gulp.watch('./src/scss/**/*.scss', css);
});
