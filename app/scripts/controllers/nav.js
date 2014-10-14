'use strict';

/**
 * @ngdoc function
 * @name tanTan4App.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the tanTan4App
 */
angular.module('tanTan4App')
  .controller('NavCtrl', function ($scope, $location) {
      $scope.isActive = function (viewLocation) {
          return viewLocation === $location.path();
      };
  });
