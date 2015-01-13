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
    'ngFx',
    'timer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/prices', {
        templateUrl: 'views/prices.html'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
