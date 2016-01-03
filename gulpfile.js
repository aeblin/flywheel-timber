// https://github.com/unlight/gulp-cssimport
var gulp = require('gulp');
var cssimport = require("gulp-cssimport");

var globalConfig = {
  src: 'css' // your dev stylesheet directory. No trailing slash
};

var vendorConfig = {
	src: 'css/vendor'
};

// Build Bootstrap
gulp.task('bootstrap', function(){
	gulp.src('bower_components/bootstrap-sass/assets/stylesheets/_bootstrap-import.scss')
		.pipe(cssimport())
		.pipe(gulp.dest('css/vendor/'));
});

// Build Bootstrap with Custom File
gulp.task('bootstrapVendor', function(){
	return gulp.src(vendorConfig.src + '/bootstrap/**/[^_]*.*')
		.pipe(cssimport())
		.pipe(gulp.dest('css/vendor/'));
});

// Build Timber
gulp.task('timberVendor', function(){
	return gulp.src(vendorConfig.src + '/timber/**/[^_]*.*')
		.pipe(cssimport())
		.pipe(gulp.dest(globalConfig.src));
});

// Build theme.scss.liquid
gulp.task('styles', function(){
  return gulp.src(globalConfig.src + '/**/[^_]*.*')
    .pipe(cssimport())
    .pipe(gulp.dest('assets/'));
});

// Watch files
gulp.task('watch', function () {
  gulp.watch(globalConfig.src + '/**/*.*', ['styles']);
});

// Default task
gulp.task('default', ['watch']);