const gulp          = require('gulp');

const source        = require('vinyl-source-stream');
const buffer        = require('vinyl-buffer');
const browserify    = require('browserify');

// Default build script
gulp.task('build', () => {
    return browserify({ entries: './src/NgNext.js' })
        .external([ 'zone.js', 'babel-polyfill' ])
        .transform('babelify')
        .bundle()
        .pipe(source('ng-next.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dist'));
});

gulp.task('example', () => {
    return browserify({ entries: './example/Example.js' })
        .transform('babelify')
        .bundle()
        .pipe(source('transpiled.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./example/dist'));
});