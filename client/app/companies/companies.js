'use strict';

angular.module('serviceFinderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('companies', {
        url: '/companies',
        template: '<companies></companies>'
      });
  });
