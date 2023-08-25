const gulp           = require('gulp')
const connect = require('gulp-connect');
const open = require('gulp-open');


// live trang web bằng gulp-connect
function startServer(done) {
    connect.server({
        root: './',
        livereload: true,
        port: 2000,
    });
    done();
}

function openBrowser() {
    return gulp.src('./') // Thay đổi đường dẫn đến thư mục chứa trang web của bạn
        .pipe(open({ uri: 'http://localhost:2000' }));
} 

exports.default = gulp.series(startServer, openBrowser); 
