'use strict';

describe('Controller: GeocodingCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGoogleMapsPracticeApp'));

  var GeocodingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeocodingCtrl = $controller('GeocodingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeocodingCtrl.awesomeThings.length).toBe(3);
  });
});
