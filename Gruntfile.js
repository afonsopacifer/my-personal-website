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

      styl: {
        files: ['dev/assets/styles/*.styl','dev/assets/**/*.styl'],
        tasks: ['stylus:compile'],
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

    // stylus
    stylus: {
      compile: {
        options: {
          compress: false
        },
        files: {
          'prod/assets/styles/style.css':'dev/assets/styles/style.styl' // 1:1 compile
        }
      }
    },

    connect: {

      server: {
        options: {
          port: 9000,
          base: "prod/",
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
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask( 'default', ['connect','watch']);

};
