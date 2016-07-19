var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

gulp.task('webserver', function(){
    connect.server();
});

gulp.task('build-prod', function(){
    return browserify({entries:'./src/index.jsx', extensions:['.jsx'], debug:true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('build-beta', function(){
    return browserify({entries:'./src/index.jsx', extensions:['.jsx'], debug:true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.min.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function(){
    return gulp.watch(['src/*.jsx'], ['build-beta']);
});

gulp.task('beta', ['webserver', 'build-beta', 'watch']);
gulp.task('prod', ['webserver', 'build-prod', 'watch']);

