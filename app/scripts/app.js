'use strict';

angular
  .module('yiqiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  /*.config(function($locationProvider){
    $locationProvider.html5Mode(true);
  })*/
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search/:query', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($httpProvider){
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
  });
