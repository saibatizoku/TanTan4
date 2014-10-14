'use strict';

describe('Controller: GranjaCtrl', function () {

  // load the controller's module
  beforeEach(module('tanTan4App'));

  var GranjaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GranjaCtrl = $controller('GranjaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
