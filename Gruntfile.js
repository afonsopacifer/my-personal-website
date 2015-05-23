module.exports = function( grunt ) {

  "use strict"

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {

      html: {
        files: 'prod/*.html',
      },

      css: {
        files: 'prod/assets/styles/*.css',
      },

      jd: {
        files: ['dev/*.jade','dev/**/*.jade'],
        tasks: ['jade:compile'],
      },

      options: {
        livereload: true
      }

    },

    // jade
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
					"prod/index.html": ["dev/index.jade"]
				}
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
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask( 'default', ['connect','watch']);

};
