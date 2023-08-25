const gulp           = require('gulp'),
    concat         = require('gulp-concat'), // Gộp nhiều file Javascript thành một file
    uglify         = require('gulp-uglify'), // Tối ưu file Javascript
    rename         = require('gulp-rename'), // Đổi tên file
    sourcemaps     = require('gulp-sourcemaps'), // Cho phép truy vấn trên trình duyệt file SCSS nào để debug style.
    livereload = require('gulp-livereload'); //  Sử dụng cùng plugin trình duyệt LiveReload để tự động load element trên trình duyệt khi CSS có thay đổi.


// xử lí javascript
//trên dev
function scripts() {
    return gulp.src('./src/**/*.js')
      .pipe( sourcemaps.init() )
      .pipe( concat( "all.min.js" ) )
      .pipe( uglify() )
      .pipe( rename( "main.min.js" ) )
      .pipe( livereload() )
      .pipe( sourcemaps.write() )
      .pipe( gulp.dest( "./assets/js" ) );
}

// production
function builds_scripts() {
return gulp.src('./src/**/*.js')
    .pipe( concat( "all.min.js" ) )
    .pipe( uglify() )
    .pipe( rename( "main.min.js" ) )
    .pipe( gulp.dest( "./build/js" ) );
}

exports.scripts = scripts
exports.builds_scripts = builds_scripts 