var gulp = require("gulp");
var mustache = require("gulp-mustache-plus");
var cleanCSS = require("gulp-clean-css");

gulp.task('default', function(){
    gulp.src("./templates/*.mustache")
        .pipe (mustache({
            msg: "hello Gulp!"
        },{},{
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
            .pipe(gulp.dest('./dist'));
});