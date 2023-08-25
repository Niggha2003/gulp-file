const gulp           = require('gulp');
const inject = require('gulp-inject');

// tự động import file vào index.html
function injectFile() {
    const sources = gulp.src(['./assets/js/*.js', './assets/css/*.css'], {read: false})
  
    return gulp.src('./index.html')
      .pipe(inject(sources))
      .pipe(gulp.dest('./'));
}

exports.default = injectFile;