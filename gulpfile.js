const {src, dest, series, watch, task} = require('gulp');
const sassGulp = require('gulp-sass');
const sassSass = require('sass');
const csso = require('gulp-csso');
const del = require('del')
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sync = require('browser-sync').create();

const ghPages = require('gulp-gh-pages');

const sass = sassGulp(sassSass);

function html() {
  return src('src/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'))
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
}

function copyImages() {
  return src('./src/images/**/*')
  .pipe(dest('./dist/images/'))
}

function scripts() {
  return src('./src/scripts/**.js')
  .pipe(dest('dist/scripts/'))
  .pipe(sync.stream())
}

function clear() {
  return del('dist')
}

function serve() {
  sync.init({
    server: './dist'
  })

  watch('src/**.html', series(html)).on('change', sync.reload)
  watch('src/parts/**.html', series(html)).on('change', sync.reload)
  watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
  watch('src/scripts/**.js', series(scripts)).on('change', sync.reload)
}

exports.build = series(clear, copyImages, scripts, scss, html);
exports.serve = series(clear, copyImages, scripts, scss, html, serve);

task('deploy', () => src('./dist/**/*').pipe(ghPages()));

exports.clear = clear;