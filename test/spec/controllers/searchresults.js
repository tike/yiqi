'use strict';

describe('Controller: SearchresultsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('yiqiApp'));

  var SearchresultsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchresultsctrlCtrl = $controller('SearchresultsctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
