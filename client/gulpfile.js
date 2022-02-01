const gulp = require("gulp");
const gulpsass = require("gulp-sass");
const sass = gulpsass(require("sass"));

gulp.task("watch", async () => {
  gulp.watch("src/components/**/*.scss", async () => {
    gulp
      .src("src/components/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("src/css"));
  });
});
