'use strict';

describe('Component: JobFormComponent', function () {

  // load the controller's module
  beforeEach(module('serviceFinderApp'));

  var JobFormComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    JobFormComponent = $componentController('JobFormComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
