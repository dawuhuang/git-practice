const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const fileinclude = require('gulp-file-include')
const { getPriority } = require('os')
// 使用gulp.task()  方法建立任务
gulp.task('first', async() => {
    // 获取要处理的文件
    await gulp.src('./src/css/index.css')
    .pipe(gulp.dest('./dist/css'))
})

// html任务
// 1.html 文件代码的压缩
// 2，抽取html文件中的公共代码
gulp.task('htmlmin',async() => {
    await gulp.src('./src/*.html')
    // 先抽取公共代码
    .pipe(fileinclude())
    // 压缩html文件中的代码
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
})