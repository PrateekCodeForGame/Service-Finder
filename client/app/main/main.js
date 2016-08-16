'use strict';

angular.module('serviceFinderApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      })
      .state('main.quotation', {
        url: '/quotation',
        template: '<quotation></quotation>'
      })
      .state('main.quotation.categories', {
        url: '/categories',
        template: '<categories></categories>'
      })
      .state('main.quotation.jobForm', {
        url: '/jobform',
        template: '<job-form></job-form>'
      });
  });
