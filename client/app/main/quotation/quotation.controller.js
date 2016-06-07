'use strict';
(function() {

  class QuotationComponent {
    constructor($scope, $state) {
      $scope.nav1 = "selected-tab";
      $state.go('main.quotation.categories');
    }
  }

  angular.module('serviceFinderApp')
    .component('quotation', {
      templateUrl: 'app/main/quotation/quotation.html',
      controller: QuotationComponent
    });

})();
