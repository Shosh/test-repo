'use strict';

/**
 * @ngdoc overview
 * @name testingAppApp
 * @description
 * # testingAppApp
 *
 * Main module of the application.
 */
angular
  .module('testingApp', [
    'testingApp.profile',
    'testingApp.config',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push(function($q) {
      return {
        'request': function(config) {
          if(localStorage.getItem('token')) {
            config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');
          }
          return config;
        }
      };
    });
  });
