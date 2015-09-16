module.exports = function( grunt ) {

  "use strict"

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    //watch and compile all files
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

      img: {
        files: ['dev/assets/img/*.{png,jpg,gif}','dev/assets/img/**/*.{png,jpg,gif}'],
        tasks: ['newer:imagemin'],
      },

      options: {
        livereload: true
      }

    },

    // The jade compile task
    jade: {
      //compile for production
      compile: {
        files: {
					"prod/index.html": ["dev/index.jade"],
          "prod/projects.html": ["dev/projects.jade"],
          "prod/articles.html": ["dev/articles.jade"],
          "prod/talks.html": ["dev/talks.jade"],
          "prod/demos.html": ["dev/demos.jade"]
				},
        options: {
            data: grunt.file.readJSON("data.json")
        }
      },
      //compile for validation
      valid: {
        options: {
          pretty: true
        },
        files: {
					"temp/index.html": ["dev/index.jade"]
				}
      }
    },

    //The stylus compile task
    stylus: {
      //compile for production
      compile: {
        files: {
          'prod/assets/styles/style.min.css':'dev/assets/styles/style.styl' // 1:1 compile
        }
      },
      //compile for Lint
      lint: {
        options: {
          compress: false
        },
        files: {
            'temp/style.css':'dev/assets/styles/style.styl' // 1:1 compile
        }
      }
    },

    //concat all JS
    concat: {
			dist: {
		      src: 'dev/assets/scripts/*.js',
		      dest: 'prod/assets/scripts/scripts.js'
		    }
		},

    //compress all js
    uglify: {
      my_target: {
        files: {
        'prod/assets/scripts/scripts.min.js': ['dev/assets/scripts/*.js']
        }
      }
    },

    //validate the HTML with W3C rules
    validation: {
      options: {
        reset: grunt.option('reset') || false,
        stoponerror: false,
      },
      files: {
        src: ['temp/index.html']
      }
    },

    //Lint the CSS
    csslint: {
      strict: {
        src: ['temp/style.css']
      }
    },

    postcss: {
      options: {
        cascade: false,
        map: true,
        processors: [
          require('autoprefixer-core')({browsers: 'last 2 version, ie >= 9'})
        ]
      },
      dist: {
        src: 'prod/assets/styles/*.css'
      }
    },

    //imagemin
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'dev/',
          src: ['assets/img/*.{png,jpg,gif}','assets/img/**/*.{png,jpg,gif}'],
          dest: 'prod/'
        }]
      }
    },

    //Deploy the production files for gh-pages
    'gh-pages': {
      options: {
        base: 'prod/'
      },
      src: ['**']
    },

    //Starts the static server
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
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('dev', ['connect','watch']);
  grunt.registerTask('build', ['jade:compile','stylus:compile','concat','uglify']);
  grunt.registerTask('validation', ['jade:valid','validation']);
  grunt.registerTask('lint', ['stylus:lint','csslint']);
  grunt.registerTask('autoprefixer', ['postcss']);
  grunt.registerTask('deploy', ['gh-pages']);

};
