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

      javascript: {
        files: 'dev/assets/scripts/*.js',
        tasks: ['uglify'],
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
        files: {
          'prod/assets/styles/style.min.css':'dev/assets/styles/style.styl' // 1:1 compile
        }
      }
    },

    //concat JS
    concat: {
			dist: {
		      src: 'dev/assets/scripts/*.js',
		      dest: 'prod/assets/scripts/scripts.js'
		    }
		},

    uglify: {
      my_target: {
        files: {
        'prod/assets/scripts/scripts.min.js': ['dev/assets/scripts/*.js']
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'prod/'
      },
      src: ['**']
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
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask( 'default', ['connect','watch']);
  grunt.registerTask( 'deploy', ['gh-pages']);

};
