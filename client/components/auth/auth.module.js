'use strict';

angular.module('serviceFinderApp.auth', [
  'serviceFinderApp.constants',
  'serviceFinderApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
