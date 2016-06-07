'use strict';

describe('Component: QuotationComponent', function () {

  // load the controller's module
  beforeEach(module('serviceFinderApp'));

  var QuotationComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    QuotationComponent = $componentController('QuotationComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
