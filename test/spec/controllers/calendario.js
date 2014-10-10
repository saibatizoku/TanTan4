'use strict';

describe('Controller: CalendarioCtrl', function () {

  // load the controller's module
  beforeEach(module('tanTan4App'));

  var CalendarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalendarioCtrl = $controller('CalendarioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
