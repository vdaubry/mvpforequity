'use strict';

/**
 * @ngdoc overview
 * @name mvpforequityApp
 * @description
 * # mvpforequityApp
 *
 * Main module of the application.
 */
angular
  .module('mvpforequityApp', [
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
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
