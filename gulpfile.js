//gulp stuff i need
var pkg = require('./package.json'),
    gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// non-gulp stuff i need
var http = require('http'),
    connect = require('connect');

var serverPort = 3000;

var paths = {
  source: ['src/**/*.coffee'],
  compiled: ['src/**/*.js'],
  tests: ['tests/**/*.coffee']
};

//compiles coffee script files
gulp.task('compile', function () {
  setTimeout(function () {
    gulp.src(paths.source)
      .pipe(plumber())
      .pipe(coffee({bare: true}))
      .pipe(gulp.dest('src'));
  }, 1000);
});

//compresses using uglify
gulp.task('compress', function () {
  //versionless file
  gulp.src(paths.compiled)
      .pipe(plumber())
      .pipe(uglify())
      .pipe(concat(pkg.name + ".min.js"))
      .pipe(gulp.dest('build'));

  //versioned file
  gulp.src(paths.compiled)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(pkg.name + "_"+ pkg.version +".min.js"))
    .pipe(gulp.dest('build'));
});

gulp.task('uncompressed', function () {
  //versionless file
  gulp.src(paths.compiled)
    .pipe(concat(pkg.name + ".js"))
    .pipe(gulp.dest('build'));

  //versioned file
  gulp.src(paths.compiled)
    .pipe(concat(pkg.name + "_"+ pkg.version +".js"))
    .pipe(gulp.dest('build'));
});

// launch this repo as a server (port defined above)
gulp.task('serve', function () {
  var app = connect().use(connect.static(__dirname));

  http.createServer(app).listen(serverPort);
  console.log('test page running at http://localhost:' + serverPort + '/index.html');
});

// builds everything to the `dist` directory
gulp.task('build', ['compile', 'uncompressed', 'compress']);

gulp.task('watch', gulp.watch(paths.source, ['build']));

// runs a build and launches a server
gulp.task('default', ['build', 'watch', 'serve']);
