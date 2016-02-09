module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
  	babel: {
  		options: {
  			sourceMap: true,
  			presets: ['babel-preset-es2015']
  		},
  		dist: {
  			files: {
  				'js/main.js': 'js/main.src.js'
  			}
  		}
  	},
    watch: {
      scripts: {
        files: ['**/*.src.js'],
        tasks: ['babel'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel']);
};
