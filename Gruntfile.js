
// Define all directory paths using ending slash "/"
var src_dir = __dirname + '/src/';
var src = {
  absurd: src_dir + 'absurd/',
};

var bin_dir = __dirname + '/bin/';
var bin = {
  styles: bin_dir + 'styles/',
};

module.exports = function (grunt) {
  var config = {
    absurd: {
      css: {
        src: src.absurd + 'index.css.js',
        dest: bin.styles + 'styles.css',
      },
      cssmin: {
        src: src.absurd + 'index.css.js',
        dest: bin.styles + 'styles.min.css',
        options: {
          minify: true,
        },
      },
    },
    watch: {
      css: {
        files: [src.absurd + '**/*.css.js'],
        tasks: ['absurd'],
        options: {
          livereload: false,
        },
      },
    },
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-absurd');

  grunt.registerTask('css', ['absurd']);
};
