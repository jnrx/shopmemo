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
      when('/locations', {
        templateUrl: 'partials/location-list.html',
        controller: 'LocationListCtrl'
      }).
      when('/locations/:locationId', {
        templateUrl: 'partials/location-detail.html',
        controller: 'LocationDetailCtrl'
      }).
      when('/events', {
        templateUrl: 'partials/event-list.html',
        controller: 'EventListCtrl'
      }).
      when('/events/:eventId', {
        templateUrl: 'partials/event-detail.html',
        controller: 'EventDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
