'use strict';
(function(){

class SubmitFormComponent {
  constructor($scope) {
    $scope.$emit("selectNav3", {});
  }
}

angular.module('serviceFinderApp')
  .component('submitForm', {
    templateUrl: 'app/main/submitForm/submitForm.html',
    controller: SubmitFormComponent
  });

})();
