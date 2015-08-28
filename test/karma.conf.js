// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-08-28 using
// generator-karma 0.9.0

module.exports = function(config) {
  'use strict';

  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai'],
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/app.js',
      'app/scripts/profile/profile.module.js',
      'app/scripts/profile/*.js',
      'test/unit/**/*.js'
    ],

    port: 9876,
    browsers: [
      'PhantomJS'
    ],
    reporters: ['spec'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-spec-reporter'
    ],

    autoWatch: true,
    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO
  });
};
