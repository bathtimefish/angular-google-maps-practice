'use strict';

/**
 * @ngdoc overview
 * @name angularGoogleMapsPracticeApp
 * @description
 * # angularGoogleMapsPracticeApp
 *
 * Main module of the application.
 */
angular
  .module('angularGoogleMapsPracticeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/basic.html',
        controller: 'BasicCtrl',
        controllerAs: 'basic'
      })
      .when('/marker', {
        templateUrl: 'views/marker.html',
        controller: 'MarkerCtrl',
        controllerAs: 'marker'
      })
      .when('/markers', {
        templateUrl: 'views/markers.html',
        controller: 'MarkersCtrl',
        controllerAs: 'markers'
      })
      .when('/circle', {
        templateUrl: 'views/circle.html',
        controller: 'CircleCtrl',
        controllerAs: 'circle'
      })
      .when('/geocoding', {
        templateUrl: 'views/geocoding.html',
        controller: 'GeocodingCtrl',
        controllerAs: 'geocoding'
      })
      .when('/reversegeocoding', {
        templateUrl: 'views/reversegeocoding.html',
        controller: 'ReversegeocodingCtrl',
        controllerAs: 'reversegeocoding'
      })
      .when('/editablecircle', {
        templateUrl: 'views/editablecircle.html',
        controller: 'EditablecircleCtrl',
        controllerAs: 'editablecircle'
      })
      .when('/uicontrols', {
        templateUrl: 'views/uicontrols.html',
        controller: 'UicontrolsCtrl',
        controllerAs: 'uicontrols'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({  // confugure Google Maps API
      v: '3.17',
      libraries: 'weather,geometry,visualization',
      language: 'ja'  // set launguage in Japanese
    });
  });
