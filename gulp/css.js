// 载入需要的依赖和插件
var gulp = require('gulp'),
	less = require('gulp-less'),                    // less 编译成 css
	rev = require('gulp-rev'),                      // 对文件名加MD5后缀
	revCollector = require('gulp-rev-collector'),   // 路径替换
	del = require('del'),                           // 删除文件

	_srcname = './client',
	_dirname = './assets',
	_rev = './rev',
	cssSrc = _srcname + '/less/**/*',
	cssRevSrc = _srcname + '/less/revCss',
	cssDest = _dirname + '/client/less';

// 合并 CSS,生成版本号
gulp.task('less', function () {
	return gulp.src(cssDest + '/**/*')
		.pipe(less())                       // less 转 css
		.pipe(gulp.dest(_dirname + '/less'))           // 直接输出到目标路径
});

gulp.task('revCss', function () {
	return gulp.src([_rev + '/**/*.json', cssSrc])
		.pipe(revCollector())
		.pipe(gulp.dest(cssRevSrc));
});

gulp.task('delRevCss', function(){
	del([
		cssRevSrc,
		_rev
	]);
});

gulp.task('css',['miniCss','revCss']);
