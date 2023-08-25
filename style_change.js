const gulp           = require('gulp'),
    rename         = require('gulp-rename'), // Đổi tên file
    sass           = require('gulp-sass')(require('sass')), // Compile (chuyển) code SCSS sang CSS.
    sourcemaps     = require('gulp-sourcemaps'), // Cho phép truy vấn trên trình duyệt file SCSS nào để debug style.
    livereload = require('gulp-livereload'), //  Sử dụng cùng plugin trình duyệt LiveReload để tự động load element trên trình duyệt khi CSS có thay đổi.
    concat         = require('gulp-concat'); // Gộp nhiều file Javascript thành một file

// xử lí scss thành css
// trên dev
function styles() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe( concat( "all.min.css" ) )
        .pipe(sass().on('error', sass.logError))
        .pipe( rename( "main.min.css" ) )
        .pipe(livereload())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./assets/css/'));
}


// production
function build_styles() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./build/css/'));
}

exports.styles = styles
exports.build_styles = build_styles 