'use strict';

/**
 * @ngdoc function
 * @name customer2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customer2App
 */
angular.module('customer2App')
  .controller('MainCtrl', function ($scope,$location) {
$scope.pass='';

      $scope.fetchOrder = function () {
          $location.path('/pontun/'+$scope.pass)


      }

  });
