'use strict';

describe('Controller: EditablecircleCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGoogleMapsPracticeApp'));

  var EditablecircleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditablecircleCtrl = $controller('EditablecircleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditablecircleCtrl.awesomeThings.length).toBe(3);
  });
});
