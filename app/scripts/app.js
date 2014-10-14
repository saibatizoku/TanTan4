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
    'LocalStorageModule',
    'CornerCouch',
    'ui.router'
  ])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('inicio');
    $stateProvider
      .state('inicio', {
          url: '/inicio',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
      })
      .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
      .state('calendario', {
          url: '/calendario',
          templateUrl: 'views/calendario.html',
          controller: 'CalendarioCtrl'
      });
  });
