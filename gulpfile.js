var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    minifyHTML = require('gulp-minify-html'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    nib = require('nib'),
    rupture = require('rupture');

// Scripts Task
// Concat + Uglify + Rename + Gzip JS File
gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.rename('main.min.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(plugins.gzip())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('build/js'))
    .pipe(reload({stream: true}));
});

// Stylus Task
// Concat + Styl to CSS + Autoprefixer + Rename + Gzip CSS File
gulp.task('styles', function(){
  gulp.src('css/**/*.styl')
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('main.styl'))
    .pipe(plugins.stylus({
      use: [nib(), rupture()],
      compress: true
    }))
    .pipe(plugins.autoprefixer('last 2 versions'))
    .pipe(plugins.rename('main.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(plugins.gzip())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(reload({stream: true}));
});

// HTML Task
// Minify + Gzip HTML File
gulp.task('htmlpages', function(){
  gulp.src('*.html')
    .pipe(minifyHTML())
    .pipe(plugins.gzip())
    .pipe(gulp.dest('build/'));
});


// Image Task
// Compress
gulp.task('image', function(){
  gulp.src('img/*')
    .pipe(plugins.imagemin({progress: true}))
    .pipe(gulp.dest('build/img'));
});

// Watch Task
// Watches JSs, CSSs, Images & HTMLs
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('css/**/*.styl', ['styles']);
  gulp.watch('img/**/*', ['image']);
  gulp.watch('**/*.html', ['htmlpages']);
});

// BrowserSync
// All Devices
gulp.task('browser-sync', function(){
  browserSync.init(['css/*.css','js/*.js','**/*.html'], {
    server: {
      baseDir: './'
    }
  });
});

// Default gulp task in one go
gulp.task('default', ['scripts','styles','htmlpages','watch','browser-sync']);