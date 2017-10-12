var browserify = require('browserify');
var gulp = require('gulp');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build-all', function() {
    return browserify({
    entries: './example.js',
    debug: true
    })
    .transform(babelify, {
        presets: ["env"],
        sourceMaps: false
    })
    .bundle()
    .pipe(source('example_build.js'))
    .pipe(gulp.dest('./build/js'));
});