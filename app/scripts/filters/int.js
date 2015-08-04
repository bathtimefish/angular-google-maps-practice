'use strict';

/**
 * @ngdoc filter
 * @name angularGoogleMapsPracticeApp.filter:int
 * @function
 * @description
 * # int
 * Filter in the angularGoogleMapsPracticeApp.
 */
angular.module('angularGoogleMapsPracticeApp')
  .filter('int', function () {
    return function (input) {
      return parseInt(input, 10);
    };
  });
