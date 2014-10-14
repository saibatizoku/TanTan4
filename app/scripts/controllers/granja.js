'use strict';

/**
 * @ngdoc function
 * @name tanTan4App.controller:GranjaCtrl
 * @description
 * # GranjaCtrl
 * Controller of the tanTan4App
 */
angular.module('tanTan4App')
  .controller('GranjaCtrl', function ($scope, $filter, cornercouch) {

        $scope.server = cornercouch('http://localhost:5984', 'GET');
        $scope.server.session()
            .success(function () {
                console.log('SESSION OBTENIDA', $scope.server.userCtx);
            });
        $scope.tt4db = $scope.server.getDB('tt4');

        $scope.newentry = $scope.tt4db.newDoc();

        $scope.tt4db.query('tt4', 'recent-items', { 'include_docs': true, descending: true, limit: 8 });

        $scope.submitLogin = function () {
            $scope.server.login($scope.loginUser, $scope.loginPass)
                .success(function () {
                    $scope.loginPass = $scope.loginUser = '';
                    $scope.showInfo = true;
                    $scope.server.getInfo();
                    $scope.server.getDatabases();
                    $scope.server.getUUIDs(3);
                    $scope.server.getUserDoc();
                    $scope.tt4db.getInfo();
                });
        };

        function setError(data, status) {
            $scope.errordata = { "status": status, "data": data };
        }

        $scope.rowClick = function (idx) {
            $scope.detail = $scope.tt4db.getQueryDoc(idx);
            $scope.formDetail.$setPristine();
        };

        $scope.nextClick = function () { $scope.tt4db.queryNext(); delete $scope.detail; };
        $scope.prevClick = function () { $scope.tt4db.queryPrev(); delete $scope.detail; };
        $scope.moreClick = function () { $scope.tt4db.queryMore(); };

        $scope.removeClick = function() {
            $scope.detail.remove()
                .success(function() {
                    delete $scope.detail;
                    $scope.gbookdb.queryRefresh();
                });
        };

        $scope.updateClick = function() {
            $scope.detail.save()
                .error(setError)
                .success( function () {
                    $scope.formDetail.$setPristine();
                });
        };

        $scope.attachClick = function() {
            var fileInput = document.getElementById("upload");
            $scope.detail.attachMulti(fileInput.files, function () {
                fileInput.value = "";
            });
        };

        $scope.detachClick = function(name) {
            $scope.detail.detach(name);
        };

        $scope.addEntry = function () {
            var now = new Date(); 
            var now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

            $scope.newentry.created_at = $filter('date')(now, 'yyyy-MM-dd HH:mm:ss');

            $scope.newentry.save().success( function() {
                delete $scope.errordata;
                $scope.detail = $scope.newentry;
                $scope.newentry = $scope.tt4db.newDoc();
                $scope.tt4db.query('tt4', 'recent-items', { 'include_docs': true, descending: true, limit: 8 });
            });

        };

  });
