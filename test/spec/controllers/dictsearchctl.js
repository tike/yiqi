'use strict';

describe('Controller: DictsearchctlCtrl', function () {

  // load the controller's module
  beforeEach(module('yiqiApp'));

  var DictsearchctlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DictsearchctlCtrl = $controller('DictsearchctlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
