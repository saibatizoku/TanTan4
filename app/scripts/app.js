'use strict';

/**
 * @ngdoc overview
 * @name tanTan4App
 * @description
 * # tanTan4App
 *
 * Main module of the application.
 */
angular
  .module('tanTan4App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/calendario', {
        templateUrl: 'views/calendario.html',
        controller: 'CalendarioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
