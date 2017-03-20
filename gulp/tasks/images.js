var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),            // 图片压缩

    _srcname = './client',
    _dirname = './assets',
    imgSrc = _srcname + '/images/**/*',
    imgDest = _dirname + '/client/images';

// 压缩 Images
gulp.task('images', function() {
    return gulp.src(imgSrc)
        .pipe(imagemin({
            optimizationLevel: 3,   // png,1~7
            progressive: true,      // jpg
            interlaced: true        // gif
        }))
        .pipe(gulp.dest(imgDest))
});