var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	less = require('gulp-less'),

	imagesSrc = './client/images/**/*',
	imagesDest = './assets/images/',

	fontsSrc = './client/fonts/**/*',
	fontsDest = './assets/fonts/',

	jsSrc = './client/js/**/*',
	jsDest = './assets/js/',

	cssSrc = './client/less/**/*',
	cssDest = './assets/css/';

// 压缩 images
gulp.task('images', function(){
	return gulp.src(imagesSrc)
		.pipe(imagemin())
		.pipe(gulp.dest(imagesDest))
});

// 复制 fonts
gulp.task('fonts', function(){
	return gulp.src(fontsSrc)
		.pipe(gulp.dest(fontsDest))
});

// 把 client 里面的 js 全部复制到 assets 中
gulp.task('js', function() {
	return gulp.src(jsSrc)
		.pipe(gulp.dest(jsDest))
});

// less 转 css
gulp.task('less', function () {
	return gulp.src(cssSrc)
		.pipe(less())
		.pipe(gulp.dest(cssDest))
});
