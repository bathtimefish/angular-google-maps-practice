'use strict';

describe('Controller: BasicCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGoogleMapsPracticeApp'));

  var BasicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasicCtrl = $controller('BasicCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BasicCtrl.awesomeThings.length).toBe(3);
  });
});
