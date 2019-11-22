'use strict';

/**
 * @ngdoc service
 * @name customer2App.tsIspan
 * @description
 * # tsIspan
 * Service in the customer2App.
 */
angular.module('customer2App')
    .service('tsIspan', function ($http, $location) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        this.getOrder = function (pwd) {

            console.log('in a serv pwd is', pwd);

            // TODO  change the URL !!!  'https://ts.ispan.is:443/pwds/search/findByPwd?pwd='+$scope.pwd
            return $http.get('https://ts.ispan.is:8433/pwds/search/findByPwd?pwd='+pwd).then(function (success) {
                console.log('success in service', success);

                if (angular.isUndefined(success.data._embedded)) {
                    alert("Vitlaust lykilord");
                    $location.path('/pontun')

                }
                else {
                    //----- ATH return the data promice in service
                    return success.data._embedded.pwds[0]
                    //  var orderData = success.data._embedded.pwds[0];
                   // var details = success.data._embedded.pwds[0].orderDetails;

                }

            }, function (error) {
                console.log('error', error);
            });

        }

    });
