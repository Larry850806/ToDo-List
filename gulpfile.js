var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var livereload = require('gulp-livereload');

gulp.task('webserver', function(){
    connect.server();
});

gulp.task('build-beta', function(){
    process.env.NODE_ENV = undefined;
    return browserify({entries:'./src/index.jsx', extensions:['.jsx', 'js'], debug:true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', function(err){
            console.log(err.stack);
            this.emit('end');
        })
        .pipe(source('bundle.min.js'))
        .pipe(gulp.dest('build'))
        .pipe(livereload());
});

gulp.task('build-prod', function(){
    process.env.NODE_ENV = 'production';
    return browserify({entries:'./src/index.jsx', extensions:['.jsx', 'js'], debug:true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', function(err){
            console.log(err.stack);
            this.emit('end');
        })
        .pipe(source('bundle.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('build'))
        .pipe(livereload());
});

gulp.task('watch-beta', function(){
    livereload.listen();
    return gulp.watch(['src/**/*.jsx', 'src/**/*.js'], ['build-beta']);
});

gulp.task('watch-prod', function(){
    livereload.listen();
    return gulp.watch(['src/**/*.jsx', 'src/**/*.js'], ['build-prod']);
});

gulp.task('beta', ['webserver', 'build-beta', 'watch-beta']);
gulp.task('prod', ['webserver', 'build-prod', 'watch-prod']);

