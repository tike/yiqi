'use strict';

describe('Controller: DictSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('yiqiApp'));

  var DictSearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DictSearchCtrl = $controller('DictSearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
