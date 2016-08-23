'use strict';
(function(){

class CategoriesComponent {
  constructor($scope, allData, $state) {
    $scope.$emit("selectNav1", {});
    $scope.showCategory = true;
    $scope.showSubCategories = [];
    $scope.allCategories = allData.categories;
    $scope.selectedSubcategory = "";
    $scope.hovering = "";

    $scope.selectedCategory = function(name) {
      allData.selectCategory(name);
      $scope.showCategory = false;
      $scope.showSubCategories = $scope.allCategories[name];
    };

    $scope.goBack = function() {
      allData.resetSelect();
      $scope.showCategory = true;
      $scope.showSubCategories = [];
      $scope.selectedSubcategory = "";
      $state.go('main.quotation.categories');
    };

    $scope.subCatSelected = function() {
      allData.selectSubCategory($scope.selectedSubcategory);
      $state.go('main.quotation.jobForm');
    };

    $scope.startHover = function() {
      $scope.hovering = "hovered";
    }
    $scope.endHover = function() {
      $scope.hovering = "";
    }
  }
}

angular.module('serviceFinderApp')
  .component('categories', {
    templateUrl: 'app/main/categories/categories.html',
    controller: CategoriesComponent
  });

})();
