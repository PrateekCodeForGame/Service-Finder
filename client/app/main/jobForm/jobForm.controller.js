'use strict';
(function(){

class JobFormComponent {
  constructor($scope, allData, $timeout, $state) {
    $scope.$emit("selectNav2", {});
    $scope.form = {};
    $scope.errorMessage = "";

    $scope.jobType = ["Privatperson","Företag","Byggherre/entreprenör","Bostadsrättsförening","Villaförening","Ideelförening","Kommun / Myndighet"];
    $scope.jobTime = ["Snarast möjligt","Inom 1 månad","Inom 3 månader","Inom 6 månader","Inom 12 månader","Tidpunkt inte så viktig"];
    $scope.contactTime = ["När som helst","Omgående","Förmiddag","Eftermiddag","Kväll"];

    $scope.resetForm = function() {
      $scope.form.pin = "";
      $scope.form.city = "";
      $scope.form.phone = "";
      $scope.form.email = "";
      $scope.form.contactTime = "";
      $scope.form.name = "";
      $scope.form.ssn = "";
      $scope.form.subCategory = "";
      $scope.form.category = "";
      $scope.form.jobType = "";
      $scope.form.jobTime = "";
      $scope.form.description = "";
    }();

    $scope.form.category = allData.selectedCategory;
    $scope.form.subCategory = allData.selectedSubCategory;
    $scope.subcategories = allData.categories[$scope.form.category];

    $scope.submitJob = function() {
      if($scope.form.pin == ""||$scope.form.city == ""||$scope.form.phone == ""||$scope.form.email == ""||$scope.form.contactTime == ""||$scope.form.nam == ""||$scope.form.ssn == ""||$scope.form.subCategory == ""||$scope.form.category == ""||$scope.form.jobType == ""||$scope.form.jobTime == ""||$scope.form.description == "") {
        $scope.errorMessage = "Vänligen fyll i alla fälten";
        $timeout(function() { $scope.errorMessage = ""; }, 3000);
      }
      else {
        allData.resetSelect();
        $scope.form = {};
        $state.go('main.quotation.categories');
      };
    }
  }
}

angular.module('serviceFinderApp')
  .component('jobForm', {
    templateUrl: 'app/main/jobForm/jobForm.html',
    controller: JobFormComponent
  });

})();
