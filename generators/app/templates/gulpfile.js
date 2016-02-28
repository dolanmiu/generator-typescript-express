var gulp = require('gulp');
var serve = require('gulp-express');

gulp.task('default', function() {

});

gulp.task('serve', function () {
    serve.run(['build/app.js']);
    gulp.watch(['app.js', 'build/**/*.js'], [serve.run]);
});
