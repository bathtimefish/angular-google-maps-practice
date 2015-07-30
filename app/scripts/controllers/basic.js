'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsPracticeApp.controller:BasicCtrl
 * @description
 * # BasicCtrl
 * Controller of the angularGoogleMapsPracticeApp
 */
angular.module('angularGoogleMapsPracticeApp')
  .controller('BasicCtrl', function ($scope) {
    var position = {"latitude": 34.693718, "longitude": 135.195487};  // 三ノ宮
    var map = {
      "center": position,
      "zoom": 14,
    };

    $scope.map = map;
  });
