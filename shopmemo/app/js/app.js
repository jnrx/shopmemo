'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
      
    $routeProvider.
      when('/', {
          templateUrl: 'partials/home.html',
          controller: 'MainCtrl'
      }).
      when('/shops', {
        templateUrl: 'partials/shop-list.html',
        controller: 'ShopListCtrl'
      }).
      when('/shops/:shopId', {
        templateUrl: 'partials/shop-detail.html',
        controller: 'ShopDetailCtrl'
      }).
      when('/items', {
        templateUrl: 'partials/shop-list.html',
        controller: 'ShopListCtrl'
      }).
      when('/items/:itemId', {
        templateUrl: 'partials/shop-detail.html',
        controller: 'ShopDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
