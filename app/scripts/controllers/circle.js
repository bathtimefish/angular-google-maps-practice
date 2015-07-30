'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsPracticeApp.controller:CircleCtrl
 * @description
 * # CircleCtrl
 * Controller of the angularGoogleMapsPracticeApp
 */
angular.module('angularGoogleMapsPracticeApp')
  .controller('CircleCtrl', function ($scope) {
    var map = {
      "center": {
        "latitude": 34.693718,
        "longitude": 135.195487
      },
      "zoom": 14,
      "marker": {
       "id": "0",
       "coords": {
         "latitude": 34.693718,
         "longitude": 135.195487
       },
       "options": {
         "draggable": true
        },
       "events": {
          "dragstart": function() {
          },
          "dragend": function(e) {
            console.info(e.position);
          }
        }
      },
      "circle": {
        "center": {
          "latitude": 34.693718,
          "longitude": 135.195487
        },
        "radius": 100,
        "fill": {
          "color": "#3333FF",
          "opacity": 0.3,
        },
        "stroke": {
          "color": "#3333FF",
          "opacity": 1.0,
          "weight": 2
        },
        "clickable": false,
        "draggable": false,
        "editable": false,
        "visible": true,
        "events": {
        }
      }
    };

    $scope.range = map.circle.radius;

    $scope.changeRange = function () {
      $scope.map.circle.radius = parseFloat($scope.range);	// setRadius of Gmap v3 requires float value.
    };

    $scope.map = map;
  });
