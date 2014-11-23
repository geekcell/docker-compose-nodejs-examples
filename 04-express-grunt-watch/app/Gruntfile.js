module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concurrent: {
      dev: {
        tasks   : ['nodemon', 'watch'],
        options : {
          logConcurrentOutput: true
        }
      }
    },

    nodemon: {
      dev: {
        script  : 'app/bin/www',
        options : {
          args        : ['dev'],
          nodeArgs    : ['--debug'],
          ext         : 'js hjs json',
          ignore      : ['node_modules/**'],
          legacyWatch : true
        }
      }
    },

    sass: {
      dist: {
        files: [
          {
            expand : true,
            cwd    : 'app/public/scss',
            src    : 'style.scss',
            dest   : 'app/public/stylesheets',
            ext    : '.css'
          }
        ]
      }
    },

    watch: {
      sass: {
        files : ['app/public/scss/**/*.scss'],
        tasks : ['sass'],
        options: {
          livereload: true
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  //grunt.loadNpmTasks('grunt-simple-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concurrent']);

};
