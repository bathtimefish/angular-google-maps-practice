'use strict';

describe('Controller: MarkersCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGoogleMapsPracticeApp'));

  var MarkersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarkersCtrl = $controller('MarkersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MarkersCtrl.awesomeThings.length).toBe(3);
  });
});
