module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
  	babel: {
  		options: {
  			sourceMap: false,
  			presets: ['babel-preset-es2015'],
        plugins: ['transform-react-jsx', 'syntax-jsx']
  		},
  		dist: {
  			files: {
  				'js/main.js': [
          'js/jsx/main.src.jsx'
        ]
  			}
  		}
  	},
    jsx: {
      files: [{
        expand: true,
        cwd: 'js/jsx',
        src: ['*.jsx'],
        dest: 'js',
        ext: '.js'
      }]
    },
    watch: {
      scripts: {
        files: [
          '**/*.src.jsx'
        ],
        tasks: ['babel'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel']);
};
