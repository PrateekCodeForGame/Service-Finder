'use strict';

angular.module('serviceFinderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aboutus', {
        url: '/aboutus',
        template: '<aboutus></aboutus>'
      });
  });
