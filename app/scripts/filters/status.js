'use strict';

/**
 * @ngdoc filter
 * @name customer2App.filter:status
 * @function
 * @description
 * # status
 * Filter in the customer2App.
 */
angular.module('customer2App')
    .filter('status', function () {
        return function (produced, delivered, optimized, ordered) {
/*

            console.log('prod', produced);
            console.log('deliv', delivered);
            console.log('opt', optimized);
            console.log('ordered', ordered);
*/

            var del = (!delivered) ? 0 : delivered;
            var prod = (!produced) ? 0 : produced;
            var opt = (optimized);
            var ord = (!ordered) ? 0 : ordered;

            console.log('del-prod-opt-ord',del,prod,opt,ord);

            if (del > 0 && del == prod) {
                return 'list-group-item-danger' // status red = delivered
            } else if (del == 0 && prod == ord) {
                return 'list-group-item-success'  //  status greed prodused
            } else if (opt) {
                return 'list-group-item-warning'  // status yellow optimized-not produces
            }
        };
    });
