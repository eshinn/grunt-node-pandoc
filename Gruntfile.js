/*
 * grunt-node-pandoc
 * https://github.com/eric-shinn/grunt-node-pandoc
 *
 * Copyright (c) 2016 Eric Shinn
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    node_pandoc: {

      markdown_options: {
        options: {
          flags: '--atx-headers'
        },
        files: {
          'tmp/es_options.md': ['test/fixtures/es_testing.md', 'test/fixtures/es_123.md']
        }
      },
      latex_options: {
        files: {
          'tmp/es_options.tex': ['test/fixtures/es_testing.md', 'test/fixtures/es_123.md']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'node_pandoc', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
  // grunt.registerTask('default', ['clean', 'node_pandoc']);

};
