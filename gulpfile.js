const gulp = require('gulp')
const watch = require('gulp-watch')

const source = './src/'
const destination = './content/themes/custom-theme'

gulp.task('watch', () => {
  gulp.src(source + '**/*', { base: source })
      .pipe(watch(source, { base: source }))
      .pipe(gulp.dest(destination))
})

