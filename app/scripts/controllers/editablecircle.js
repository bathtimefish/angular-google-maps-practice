'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsPracticeApp.controller:EditablecircleCtrl
 * @description
 * # EditablecircleCtrl
 * Controller of the angularGoogleMapsPracticeApp
 */
angular.module('angularGoogleMapsPracticeApp')
  .controller('EditablecircleCtrl', function ($scope) {
    var map = {
      "center": {
        "latitude": 34.693718,
        "longitude": 135.195487
      },
      "zoom": 14,
      "circle": {
        "center": {
          "latitude": 34.693718,
          "longitude": 135.195487
        },
        "radius": 300,
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
        "editable": true,
        "visible": true,
        "events": {
          "radius_changed": function(e) {
            $scope.map.radius = e.radius;
            $scope.radius = e.radius;
          },
        }
      }
    };

    $scope.radius = 300;
    $scope.map = map;

  });
