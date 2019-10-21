var gulp = require("gulp");
var mustache = require("gulp-mustache-plus");
var cleanCSS = require("gulp-clean-css");
var browserSync = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var del = require("del");
var htmlmin = require("gulp-html-minifier");
var sass = require("gulp-sass");
var runSequence = require("run-sequence");
const fetch = require("isomorphic-fetch");
var rename = require("gulp-rename");

let svg = "";

let blogs;

const setImage = url => {
  switch (url) {
    case "/exam-stress":
      svg = "exams.svg";
      break;
    case "/social-anxiety":
      svg = "party.svg";
      break;
    case "/calm-breathing":
      svg = "children.svg";
      break;
    case "/starting-university":
      svg = "university.svg";
      break;
    case "/love-relationships":
      svg = "love.svg";
      break;
    case "/come-fly-with-me":
      svg = "plane.svg";
      break;
    case "/monday-feeling":
      svg = "work.svg";
      break;
    case "/stop-smoking":
      svg = "smoke.png";
      break;
    case "/calm":
      svg = "calm.svg";
      break;
    case "/happy-new-year":
      svg = "newyear.svg";
      break;
    case "/flown-nest":
      svg = "nest.svg";
      break;
    case "/anxiety":
      svg = "void.svg";
      break;
    case "/people-with-anxiety":
      svg = "void.svg";
      break;
    case "/afraid-of-cheese":
      svg = "cart.svg";
      break;
    default:
      return "blog.svg";
  }

  return svg;
};

// https://www.imperial-webservices.co.uk/.netlify/functions/index'

gulp.task("handlebars", function() {
  fetch("https://www.imperial-webservices.co.uk/.netlify/functions/index")
    .then(data => data.json())
    .then(data => {
      const blogs = data.blogs;

      blogs.forEach(blog => {
        blog.image = setImage(blog.url);
      });

      gulp
        .src("./templates/**/*.mustache")
        .pipe(
          mustache(
            {
              blogs: blogs
            },
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
        .pipe(gulp.dest("./dist/"));

      blogs.forEach(blog => {
        gulp
          .src("./templates/blogs/*.mustache")
          .pipe(
            mustache(
              {
                title: blog.title,
                content: blog.content,
                teaser: blog.teaser,
                url: blog.url
              },
              {},
              {
                head: "./templates/partials/head.mustache",
                header: "./templates/partials/header.mustache",
                footer: "./templates/partials/footer.mustache",
                scripts: "./templates/partials/scripts.mustache",
                nav: "./templates/partials/nav.mustache",
                memberof: "./templates/partials/memberof.mustache",
                contact: "./templates/partials/contact.mustache",
                contactwithpicture:
                  "./templates/partials/contactwithpicture.mustache",
                cookie: "./templates/partials/cookie.mustache"
              }
            )
          )
          .pipe(htmlmin({ collapseWhitespace: true }))
          .pipe(
            rename(function(path) {
              path.basename = blog.url;
              path.extname = ".html";
            })
          )
          .pipe(gulp.dest("./dist/blogs"));
      });
    });
});

gulp.task("sass", function() {
  gulp
    .src("./src/sass/main.scss")
    .pipe(sass({ style: "expanded" }))
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
    .src("./templates/**/*.mustache")
    .pipe(
      mustache(
        "blogs.json",
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
  runSequence(
    "copyJS",
    "imageMin",
    "handlebars",
    "sass",
    "minify",
    "minifyHTML"
  );
});
