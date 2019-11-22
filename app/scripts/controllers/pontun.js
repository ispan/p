'use strict';

/**
 * @ngdoc function
 * @name customer2App.controller:PontunCtrl
 * @description
 * # PontunCtrl
 * Controller of the customer2App
 */
angular.module('customer2App')
    .controller('PontunCtrl', function ($scope, $routeParams, tsIspan) {
        // $scope.pwd = $routeParams.pw;

        $scope.loading = true;

        //-------------- TODO remove simulating delay setTimeout  in production

  //      setTimeout(function () {
            tsIspan.getOrder($routeParams.pw).then(function (d) {
    // checking the correct password , if service returns true = the pass is wrong

                    $scope.loading = false;
                    $scope.order = d;
                    $scope.isDate = new Date(d.orderdate.substring(0, 10));

                    console.log('then ...', d)


                },function (e) {
                console.log('serice error',e);

                }
            )

    //   }, 1000);


        $scope.PageDate = new Date();

    });
