var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');


gulp.task('jsx', function () {
    browserify('./src/root/Root.js')
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        .bundle()
        .pipe(source('bundle.js'))
        //.pipe(buffer())
        //.pipe(uglify())
        .pipe(gulp.dest('./dest/js'));
});

gulp.task('watch', function () {
    gulp.watch('./src/root/Root.js', ['jsx']);
    gulp.watch('./src/actions/*.js', ['jsx']);
    gulp.watch('./src/components/container/*.js', ['jsx']);
    gulp.watch('./src/components/pages/*.js', ['jsx']);
    gulp.watch('./src/constants/*.js', ['jsx']);
    gulp.watch('./src/reducers/*.js', ['jsx']);
    gulp.watch('./src/store/*.js', ['jsx']);
    gulp.watch('./src/utils/*.js', ['jsx']);

});

gulp.task('default', ['watch', 'jsx']);
