// 载入需要的依赖和插件
var gulp = require('gulp'),
	less = require('gulp-less'),                    // less 编译成 css

	cssSrc = './client/less/**/*',
	cssDest = './assets/less/';

// 合并 CSS,生成版本号
gulp.task('less', function () {
	return gulp.src(cssSrc)
		.pipe(less())                       // less 转 css
		.pipe(gulp.dest(cssDest))           // 直接输出到目标路径
});
