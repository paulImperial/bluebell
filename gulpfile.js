var gulp = require("gulp");
var mustache = require("gulp-mustache-plus");
var cleanCSS = require("gulp-clean-css");
var browserSync = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var del = require("del");
var htmlmin = require("gulp-html-minifier");
var sass = require("gulp-sass");
var uncss = require("gulp-uncss");
var runSequence = require("run-sequence");

gulp.task("sass", function() {
  gulp
    .src("./src/sass/main.scss")
    .pipe(sass({ style: "expanded" }))
    // .pipe(uncss({
    //     html: ['dist/*.html']
    // }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("minifyHTML", function() {
  gulp
    .src("./dist/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("clean", function() {
  del("dist/css");
});

gulp.task("mustache", function() {
  gulp
    .src("./templates/*.mustache")
    .pipe(
      mustache(
        {},
        {},
        {
          head: "./templates/partials/head.mustache",
          header: "./templates/partials/header.mustache",
          footer: "./templates/partials/footer.mustache",
          scripts: "./templates/partials/scripts.mustache",
          nav: "./templates/partials/nav.mustache",
          memberof: "./templates/partials/memberof.mustache",
          contact: "./templates/partials/contact.mustache",
          cookie: "./templates/partials/cookie.mustache"
        }
      )
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("minify", function() {
  gulp
    .src("css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("sync", function() {
  browserSync.init({
    server: "./dist"
  });
});

gulp.task("copyImages", function() {
  return gulp.src("img/*").pipe(gulp.dest("dist/img"));
});

gulp.task("copyJS", function() {
  return gulp.src("src/js/*").pipe(gulp.dest("dist/js"));
});

gulp.task("imageMin", function() {
  gulp
    .src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});

gulp.task("default", function() {
  runSequence("copyJS", "imageMin", "mustache", "sass", "minify", "minifyHTML");
});

// gulp.task('default', ['copyJS','imageMin','mustache', 'sass']);
