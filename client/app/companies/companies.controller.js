'use strict';
(function(){

class CompaniesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('serviceFinderApp')
  .component('companies', {
    templateUrl: 'app/companies/companies.html',
    controller: CompaniesComponent
  });

})();
