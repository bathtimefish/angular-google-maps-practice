'use strict';

describe('Filter: int', function () {

  // load the filter's module
  beforeEach(module('angularGoogleMapsPracticeApp'));

  // initialize a new instance of the filter before each test
  var int;
  beforeEach(inject(function ($filter) {
    int = $filter('int');
  }));

  it('should return the input prefixed with "int filter:"', function () {
    var text = 'angularjs';
    expect(int(text)).toBe('int filter: ' + text);
  });

});
