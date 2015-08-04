'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsPracticeApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the angularGoogleMapsPracticeApp
 */
angular.module('angularGoogleMapsPracticeApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      //console.log(viewLocation);
      //console.log($location.path());
      return viewLocation === $location.path();
    };
  });
