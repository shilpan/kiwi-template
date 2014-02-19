module.exports = function(grunt) {
  grunt.initConfig({
    absurd: {
      css: {
        src: __dirname + '/src/absurd/index.css.js',
        dest: __dirname + '/src/res/styles/styles.css'
      },
      cssmin: {
        src: __dirname + '/src/absurd/index.css.js',
        dest: __dirname + '/src/res/styles/styles.min.css',
        options: {
          minify: true
        }
      }
    },
    watch: {
      css: {
        files: [__dirname + '/src/absurd/**/*.css.js'],
        tasks: ['absurd'],
        options: {
          livereload: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-absurd');

  grunt.registerTask('css', ['absurd', 'watch']);
}
