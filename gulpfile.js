// 载入需要的依赖和插件
var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	runSequence = require('run-sequence'),
	reload = browserSync.reload,                    // 页面同步刷新
	del = require('del'),                           // 删除文件
	nodemon = require('gulp-nodemon'),
	requireDir = require('require-dir'),

	cssSrc = './client/less/**/*',
	jsSrc = './client/js/**/*',
	imgSrc = './client/images/**/*',
	htmlSrc = './views';

// 递归引入gulp/tasks目录下的文件
requireDir('./gulp', { recurse: true });

// 清除上次打包的 assets 里面的所有文件
gulp.task('clean', function(){
	del('./assets/*')                   // 不希望删掉这个文件: '!dist/mobile/deploy.json'
});

// 打包静态文件
gulp.task('build', function (done) {
	runSequence(
		['clean'],
		['js'],
		['less'],
		['images'],
		['fonts'],
	done);
});

// dev 启动静态 Server 和文件变化监控
gulp.task('run', function() {
	// 启动 node express
	nodemon({
		script: 'app.js',
		env: {
			'NODE_ENV': 'development'
		}
	});
	browserSync.init({
		proxy: 'http://localhost:' + 6000,
		port: 8000,                   // 自定义端口
		notify: false                 // 不需要浏览器上提示状态信息
	});
	gulp.watch([htmlSrc+'/*/*', cssSrc, jsSrc, imgSrc]).on('change', reload);
});
