// 载入需要的依赖和插件
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    runSequence = require('run-sequence'),
    reload = browserSync.reload,                    // 页面同步刷新
    del = require('del'),                           // 删除文件
    nodemon = require('gulp-nodemon'),
    requireDir = require('require-dir'),

    _srcname = './client',
    _dirname = './assets',
    _rev = './rev',
    cssSrc = _srcname + '/less/**/*',
    jsSrc = _srcname + '/js/**/*',
    imgSrc = _srcname + '/images/**/*',
    cssRevSrc = _srcname + '/less/revCss',
    htmlSrc = './views';


// 递归引入gulp/tasks目录下的文件
requireDir('./gulp/tasks', { recurse: true });

// 清除上次打包的 assets 里面的所有文件，以及 cssRev
gulp.task('clean', function(){
    del([
        _dirname +'/*',                     // 不希望删掉这个文件,取反这个匹配模式: '!dist/mobile/deploy.json'
        _rev,
        cssRevSrc
    ]);
});

// build
gulp.task('build', function (done) {
    runSequence(
        ['images'],
        ['revCss'],
        ['miniCss', 'js'],
        ['html'],
        ['delRevCss'],
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