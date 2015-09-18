// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here

    // configure jshint to validate js files -------
    jshint: {
    	options: {
    		reporter: require('jshint-stylish') // use jshint-stylish to make our errors look good;
    	},

    	// when this task is run, lint the Gruntfile and all js files in src
    	build: ['Gruntfile.js', 'src/**/*.js']
    },
    //configure uglify to minify js files ----------
   uglify: { 
    options: { 
      banner: '/\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n/\n' 
    }, 
    build: { 
      files: { 'dist/js/magic.min.js': ['src/js/magic.js', 'src/js/magic2.js'] } 
    }
  },
    // compile less stylesheets to css -------
    less: {
      build: {
        files: {
          'dist/css/pretty.css': 'src/css/pretty.less'
        }
      }
    },
     // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/<%= pkg.name %>-<%= grunt.template.today("yyyy-mm-dd") %>-styles.min.css': 'src/css/**/*.css'
        }
      }
    },
    watch: {
      // for stylesheets, watch css and less files;
      files: ['src/**/*.css', 'src/**/*.less'],
      tasks: ['less', 'cssmin'],
      scripts: {
        files: 'src/**/*.js', tasks: ['jshint', 'uglify']
      }
    }
  });

  // grunt.registerTask('default', ['uglify', 'cssmin', 'less']); 
  grunt.registerTask('default', ['watch']); 
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};

