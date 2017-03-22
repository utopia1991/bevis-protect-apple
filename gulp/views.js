var gulp = require('gulp'),

	htmlSrc = './views/**/*',
	htmlDest = './assets';

// Html
gulp.task('html', function () {
	return gulp.src(htmlSrc)
		.pipe(gulp.dest(htmlDest));
});
