'use strict';
(function() {

  class QuotationComponent {
    constructor($scope, $state) {
      $scope.nav1 = "selected-tab";
      $scope.nav2 = "";
      $scope.nav3 = "";
      $state.go('main.quotation.categories');

      $scope.$on('selectNav1', function(event) {
        $scope.nav1 = "selected-tab";
        $scope.nav2 = "";
        $scope.nav3 = "";
      });

      $scope.$on('selectNav2', function(event) {
        $scope.nav1 = "";
        $scope.nav2 = "selected-tab";
        $scope.nav3 = "";
      });

      $scope.$on('selectNav3', function(event) {
        $scope.nav1 = "";
        $scope.nav2 = "";
        $scope.nav3 = "selected-tab";
      });
    }
  }

  angular.module('serviceFinderApp')
    .component('quotation', {
      templateUrl: 'app/main/quotation/quotation.html',
      controller: QuotationComponent
    });

})();
