'use strict';

describe('Component: AboutusComponent', function () {

  // load the controller's module
  beforeEach(module('serviceFinderApp'));

  var AboutusComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AboutusComponent = $componentController('AboutusComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
