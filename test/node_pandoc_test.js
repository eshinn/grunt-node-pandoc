'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.node_pandoc = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  es_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/es_options.md');
    var expected = grunt.file.read('test/expected/es_options.md');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  es_options_latex: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/es_options.tex');
    var expected = grunt.file.read('test/expected/es_options.tex');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  }
};
