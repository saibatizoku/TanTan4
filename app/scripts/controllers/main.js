'use strict';

/**
 * @ngdoc function
 * @name tanTan4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tanTan4App
 */
angular.module('tanTan4App')
  .controller('MainCtrl', function ($scope, localStorageService) {
    $scope.todos = [];

    $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
  });
