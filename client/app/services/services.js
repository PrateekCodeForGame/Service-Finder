'use strict';

angular.module('serviceFinderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('services', {
        url: '/services',
        template: '<services></services>'
      });
  });
