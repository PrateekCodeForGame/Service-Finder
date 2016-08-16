'use strict';
(function(){

class JobFormComponent {
  constructor($scope, allData) {
    $scope.$emit("selectNav2", {});
    $scope.form = {};

    $scope.form.category = allData.selectedCategory;
    $scope.form.subCategory = allData.selectedSubCategory;
    $scope.subcategories = allData.categories[$scope.form.category];

    $scope.jobType = ["Privatperson","Företag","Byggherre/entreprenör","Bostadsrättsförening","Villaförening","Ideelförening","Kommun / Myndighet"];
    $scope.jobTime = ["Snarast möjligt","Inom 1 månad","Inom 3 månader","Inom 6 månader","Inom 12 månader","Tidpunkt inte så viktig"];
    $scope.contactTime = ["När som helst","Omgående","Förmiddag","Eftermiddag","Kväll"];
  }
}

angular.module('serviceFinderApp')
  .component('jobForm', {
    templateUrl: 'app/main/jobForm/jobForm.html',
    controller: JobFormComponent
  });

})();
