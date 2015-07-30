'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsPracticeApp.controller:MarkersCtrl
 * @description
 * # MarkersCtrl
 * Controller of the angularGoogleMapsPracticeApp
 */
angular.module('angularGoogleMapsPracticeApp')
  .controller('MarkersCtrl', function ($scope) {

    var map = {
      "center": {
        "latitude": 34.693718,
        "longitude": 135.195487
      },
      "zoom": 14,
      "options": {
        "draggable": true
      },
      "events": {
        "dragstart": function() {
        },
        "dragend": function(e) {
          console.info(e.position);
        }
      },
      "markers": [
        {
          "id": "0",
          "coords": { // 三ノ宮駅
            "latitude": 34.693718,
            "longitude": 135.195487
          }
        },
        {
          "id": "1",
          "coords": { // ビーナスブリッジ
            "latitude": 34.697163,
            "longitude": 135.180707
          }
        },
        {
          "id": "2",
          "coords": { // 元町駅
            "latitude": 34.689569,
            "longitude": 135.187373
          }
        },
        {
          "id": "3",
          "coords": { // 神戸市役所
            "latitude": 34.690152,
            "longitude": 135.195523
          }
        },
        {
          "id": "4",
          "coords": { // 貿易センター
            "latitude": 34.689397,
            "longitude": 135.199458
          }
        }
      ]
    };

    $scope.map = map;
  });
