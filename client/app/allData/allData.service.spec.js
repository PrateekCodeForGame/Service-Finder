'use strict';

describe('Service: allData', function () {

  // load the service's module
  beforeEach(module('serviceFinderApp'));

  // instantiate service
  var allData;
  beforeEach(inject(function (_allData_) {
    allData = _allData_;
  }));

  it('should do something', function () {
    expect(!!allData).toBe(true);
  });

});
