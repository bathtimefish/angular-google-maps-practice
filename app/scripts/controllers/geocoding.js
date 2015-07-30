'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsPracticeApp.controller:GeocodingCtrl
 * @description
 * # GeocodingCtrl
 * Controller of the angularGoogleMapsPracticeApp
 */
angular.module('angularGoogleMapsPracticeApp')
  .controller('GeocodingCtrl', function ($scope, uiGmapGoogleMapApi) {
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
      "control": {},
      "refresh": false
    };

    $scope.map = map;

    $scope.map.refresh = function (center) {
      $scope.map.marker.coords = center;
      $scope.map.control.refresh(center);
    }.bind(this);

    $scope.searchAddress = function() {
      uiGmapGoogleMapApi.then(function(gMapApi) {
        var geocoder = new gMapApi.Geocoder();
        geocoder.geocode({"address": $scope.address}, function(results, status){
          if (status === gMapApi.GeocoderStatus.OK) {
            var latlng = { "latitude": results[0].geometry.location.k, "longitude": results[0].geometry.location.D };
            $scope.map.marker.coords = latlng;
            $scope.map.refresh(latlng);
          }
        }.bind(this));
      }.bind(this));
    };

  });
