/*
 * grunt-node-pandoc
 * https://github.com/eric-shinn/grunt-node-pandoc
 *
 * Copyright (c) 2016 Eric Shinn
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var path = require('path');
  var nodePandoc = require('node-pandoc');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('node_pandoc', 'Control node-pandoc via Grunt', function() {
    // Merge task-specific and/or target-specific options with these defaults.

    var options = this.options({
      flags: false
    });

    var done = this.async();
    var tally = {
      dirs: 0,
      files: 0
    };

    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      grunt.verbose.writeln('Creating ' + f.dest);
      tally.dirs++;
      grunt.file.mkdir(path.dirname(f.dest));

      nodePandoc(f.src.shift(),f.src.concat([(options.flags ? options.flags+' -o' : '-o'),f.dest]).join(' '),function(err,result){
        if (err) {
          grunt.log.warn(err);
        }
        if (result) {
          tally.files++;
          if (tally.dirs) {
            grunt.log.write('Created '+tally.dirs.toString()+(tally.dirs === 1 ? ' directory' : ' directories'));
          }
          if (tally.files) {
            grunt.log.write((tally.dirs ? ', compiled ' : 'Compiled ')+tally.files.toString()+(tally.files === 1 ? ' file' : ' files'));
          }
          grunt.log.writeln();
          done();
        }
      });
    });
  });
};
