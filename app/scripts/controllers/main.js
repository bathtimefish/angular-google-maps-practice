'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsPracticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGoogleMapsPracticeApp
 */
angular.module('angularGoogleMapsPracticeApp')
  .controller('MainCtrl', function ($scope) {
    var map = {
      "control": {},
      "center": {
        "latitude": 35.7884631,		//仮値 あとでなおす
        "longitude": 139.6123444,		//仮値 あとでなおす
      },
      "zoom": 14,
      "refresh": false,
    };

    $scope.map = map;
  });
