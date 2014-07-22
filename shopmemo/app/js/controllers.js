'use strict';

/* Controllers */

var eventMemoControllers = angular.module('eventMemoControllers', []);

eventMemoControllers.controller('LocationListCtrl', ['$scope', 'Location',
  function($scope, Location) {
    $scope.locations = Location.query();
    $scope.orderProp = 'age';
  }]);

eventMemoControllers.controller('LocationDetailCtrl', ['$scope', '$routeParams', 'Location',
  function($scope, $routeParams, Location) {
    $scope.location = Location.get({locationId: $routeParams.locationId}, function(location) {
      $scope.mainImageUrl = location.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
