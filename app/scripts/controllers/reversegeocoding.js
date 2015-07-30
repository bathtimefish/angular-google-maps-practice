'use strict';

/**
 * @ngdoc function
 * @name angularGoogleMapsPracticeApp.controller:ReversegeocodingCtrl
 * @description
 * # ReversegeocodingCtrl
 * Controller of the angularGoogleMapsPracticeApp
 */
angular.module('angularGoogleMapsPracticeApp')
  .controller('ReversegeocodingCtrl', function ($scope, uiGmapGoogleMapApi) {

    $scope.address = '神戸市三ノ宮';

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
          "dragend": function() {}
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

    var __getFixedAddress = function(address) {
      if(!address) { return null; }
      var re = new RegExp("^日本, 〒\\d{3}-?\\d{4}");
      return address.replace(re, '').trim();
    };

    var __updateAddress = function(address) {	// データ更新用関数
      $scope.address = address;
    }.bind(this);

    $scope.map.marker.events.dragend = function(e) {
      uiGmapGoogleMapApi.then(function(gMapApi) {
        var geocoder = new gMapApi.Geocoder();
        var latLng = new gMapApi.LatLng(e.position.k, e.position.D);
        geocoder.geocode({"location": latLng}, function(results, status){
          if (status === gMapApi.GeocoderStatus.OK) {
            var result = results[0];
            var newAddress = __getFixedAddress(result.formatted_address);
            $scope.$apply(__updateAddress(newAddress));	// 明示的にViewにbindingする
          } else {
            $scope.$apply(__updateAddress('住所が取得できませんでした'));	// 明示的にViewにbindingする
          }
        }.bind(this));
      }.bind(this));
    };

  });
