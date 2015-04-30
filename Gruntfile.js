module.exports = function( grunt ) {

  "use strict"

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {

      html: {
        files: '*.html',
      },

      css: {
        files: 'assets/css/*.css',
      },

      options: {
        livereload: true
      }

    },

    connect: {

      server: {
        options: {
          port: 9000,
          hostname: "localhost",
          livereload: true,
          open: true
        }
      }

    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask( 'dev', ['connect','watch']);

};
