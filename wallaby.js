var wallabify = require('wallabify');
var wallabyPostprocessor = wallabify({});

module.exports = function () {
  return {
    files: [
      {pattern: 'src/**/*.ts', load: false}
    ],

    tests: [
      {pattern: 'test/**/*.spec.ts', load: false}
    ],

    env: {
      kind: 'chrome'
    },

    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
        file.content,
        {sourceMap: true, presets: ['es2015']})
    },

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};
