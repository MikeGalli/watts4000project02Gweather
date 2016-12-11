'use strict';

/**
 * @ngdoc function
 * @name watts4000project02GweatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the watts4000project02GweatherApp
 */
angular.module('watts4000project02GweatherApp')
.controller('MainCtrl', function ($scope, citysearch) {
  $scope.citiesFound = citysearch.find();

  $scope.findCities = function(){
      $scope.citiesFound = citysearch.find({
          query: $scope.location
      });
      $scope.searchQuery = $scope.location;
  };
});
