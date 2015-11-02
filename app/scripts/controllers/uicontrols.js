'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsPracticeApp.controller:BasicCtrl
 * @description
 * # BasicCtrl
 * Controller of the angularGoogleMapsPracticeApp
 */
angular.module('angularGoogleMapsPracticeApp')
  .controller('UicontrolsCtrl', function ($scope) {
    var position = {"latitude": 34.693718, "longitude": 135.195487};  // 三ノ宮
    var map = {
      "center": position,
      "zoom": 14,
      "options": {
        "streetViewControl": false,   // ストリートビューアイコン(ペグマン) を非表示にする
        "mapTypeControl": false,      // 地図切り替えボタンを非表示にする
      }
    };

    $scope.map = map;
  });
