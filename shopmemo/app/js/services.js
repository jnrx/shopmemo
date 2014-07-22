'use strict';

/* Services */

var eventMemoServices = angular.module('eventMemoServices', ['ngResource']);

eventMemoServices.factory('Location', ['$resource',
  function($resource){
    return $resource('locations/:locationId.json', {}, {
      query: {method:'GET', params:{locationId:'locations'}, isArray:true}
    });
  }]);
