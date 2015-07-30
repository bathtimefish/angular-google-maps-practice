'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsPracticeApp.controller:MarkerCtrl
 * @description
 * # MarkerCtrl
 * Controller of the angularGoogleMapsPracticeApp
 */
angular.module('angularGoogleMapsPracticeApp')
  .controller('MarkerCtrl', function ($scope) {
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
      }
    };

    $scope.map = map;
  });
