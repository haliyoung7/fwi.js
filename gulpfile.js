var browserify = require('browserify');
var gulp = require('gulp');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var debug = require('gulp-debug');

gulp.task('build-all', function() {
    return browserify({
        entries: './index.js',
        debug: false,
        transform: [babelify]
    })
        .bundle()
        .pipe(source('fwi.common.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
    gulp.watch('./index.js', ['build-all'])
});