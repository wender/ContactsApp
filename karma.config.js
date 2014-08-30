module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
        'app/libs/angularjs/1.2.16/angular.min.js',
        'test/angular-mocks.js',
        'app/libs/angularjs/1.2.16/angular-resource.min.js',
        'app/libs/angularjs/1.2.16/angular-route.min.js',
        'app/directives.js',
        'app/services.js',
        'app/controller.js',
        'test/*.tests.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};
