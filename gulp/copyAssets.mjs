import gulp from 'gulp';

const copySvg = () =>
  gulp.src('source/assets/img/**/*.svg', { base: 'source' })
    .pipe(gulp.dest('build'));

const copyImages = () =>
  gulp.src('source/assets/img/**/*.{png,jpg,webp}', { base: 'source' })
    .pipe(gulp.dest('build'));

const copy = () =>
  gulp.src([
    'source/**.html',
    'source/fonts/**',
    'source/assets/**/*',
    'source/favicon/**'
  ], {
    base: 'source',
  })
    .pipe(gulp.dest('build'));

export { copy, copyImages, copySvg };
