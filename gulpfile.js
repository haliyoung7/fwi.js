var browserify = require('browserify');
var gulp = require('gulp');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build-all', function() {
    return browserify({
    entries: './build-index.js',
    debug: false
    })
    .transform(babelify, {
        presets: ["env"],
        sourceMaps: false
    })
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    gulp.watch('./index.js', ['build-all'])
});