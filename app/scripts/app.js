'use strict';

/**
 * @ngdoc overview
 * @name customer2App
 * @description
 * # customer2App
 *
 * Main module of the application.
 */
angular
  .module('customer2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pontun/:pw', {
        templateUrl: 'views/pontun.html',
        controller: 'PontunCtrl',
        controllerAs: 'pontun'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
