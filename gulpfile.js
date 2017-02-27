var gulp = require("gulp");
var mustache = require("gulp-mustache-plus");
var cleanCSS = require("gulp-clean-css");
var browserSync = require('browser-sync');

gulp.task('mustache', function(){
    gulp.src("./templates/*.mustache")
        .pipe (mustache({},{},{
            head: "./templates/partials/head.mustache",
            header: "./templates/partials/header.mustache",
            footer: "./templates/partials/footer.mustache",
            scripts: "./templates/partials/scripts.mustache",
            nav: "./templates/partials/nav.mustache"
        })).pipe(gulp.dest("./dist"));
});

gulp.task('minify', function(){
        gulp.src('css/*.css')
            .pipe(cleanCSS({compatibility : 'ie8'}))
            .pipe(gulp.dest('./dist/css'));
});

gulp.task('sync', function(){
      browserSync.init({
        server: {
            baseDir: 'dist'
    },
  })
});

gulp.task('copyImages', function () {
     return gulp
             .src('img/*')
             .pipe(gulp.dest('dist/img'));
});

gulp.task('copyJS', function () {
     return gulp
             .src('js/*')
             .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['copyJS','copyImages','mustache', 'minify', 'sync']);