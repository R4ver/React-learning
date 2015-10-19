"use strict";

var gulp = require('gulp'),
    watch = require("gulp-watch"),
    react = require('gulp-react'),
    sass = require('gulp-sass');

gulp.task('react', function () {
    return gulp.src('src/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('build/'));
});

gulp.task('sass', function () {
    gulp.src('src/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/'));
});
 
gulp.task('default', function () {
    gulp.watch('./src/*.jsx', ['react']);
    gulp.watch('./src/*.sass', ['sass']);
});