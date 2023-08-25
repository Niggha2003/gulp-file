const gulp           = require('gulp')
const livereload = require('gulp-livereload'); //  Sử dụng cùng plugin trình duyệt LiveReload để tự động load element trên trình duyệt khi CSS có thay đổi.

const { styles } = require('./style_change') ;
const { scripts } = require('./js_change') ;

function reload() {
    return gulp.src('./*.html')
        .pipe(livereload());
}

// watch files
function watchFiles(done) {
    livereload.listen(35729);
    gulp.watch('./src/scss/**/*.scss', styles);
    gulp.watch('./src/**/*.js', scripts);
    gulp.watch('./*.html', reload);

    done();
}

exports.default =  watchFiles;

