module.exports = function(config) {
  config.set({
    basePath: 'Scripts',
    frameworks: ['mocha', 'jspm'],
    browsers: ['Chrome'],
    autoWatch: true,
    jspm: {
      // useBundles: true,
      loadFiles: [
        'tests/*.specs.js'
      ],
      serveFiles: [
        //'**/*.js'
      ],
    },
    reporters: ['mocha'],
    proxies: {
      // '/base/': '/scripts/'
    },
    mocha: {
      timeout: 10000,
    },
  });
};
