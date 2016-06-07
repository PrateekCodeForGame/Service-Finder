'use strict';

describe('Component: CategoriesComponent', function () {

  // load the controller's module
  beforeEach(module('serviceFinderApp'));

  var CategoriesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CategoriesComponent = $componentController('CategoriesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
