const gulp           = require('gulp')

const injectFile = require('./auto_import').default ;
const runBrowser = require('./auto_golive').default;
const watchFiles = require('./watch_files').default ;

const { styles, build_styles } = require('./style_change');
const { scripts, builds_scripts }= require('./js_change') ;

exports.default = gulp.series(styles, scripts, injectFile, runBrowser, watchFiles);
exports.build = gulp.parallel(build_styles, builds_scripts);
