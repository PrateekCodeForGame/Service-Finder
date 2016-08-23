'use strict';

describe('Component: SubmitFormComponent', function () {

  // load the controller's module
  beforeEach(module('serviceFinderApp'));

  var SubmitFormComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    SubmitFormComponent = $componentController('SubmitFormComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
