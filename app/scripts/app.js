'use strict';

/**
 * @ngdoc overview
 * @name lysogsalt2015noApp
 * @description
 * # lysogsalt2015noApp
 *
 * Main module of the application.
 */
angular
  .module('lysogsalt2015noApp', [
    'ngAnimate',
    'ngRoute',
    'timer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      /*.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })*/
      .otherwise({
        redirectTo: '/'
      });
  });
