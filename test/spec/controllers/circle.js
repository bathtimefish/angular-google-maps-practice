'use strict';

describe('Controller: CircleCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGoogleMapsPracticeApp'));

  var CircleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CircleCtrl = $controller('CircleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CircleCtrl.awesomeThings.length).toBe(3);
  });
});
