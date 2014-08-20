'use strict';

var gulp 	= require('gulp'),
	jasmine = require('gulp-jasmine');

gulp.task('test', function () {

	gulp.src('test/*')
		.pipe(jasmine());

});
