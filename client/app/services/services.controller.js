'use strict';
(function(){

class ServicesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('serviceFinderApp')
  .component('services', {
    templateUrl: 'app/services/services.html',
    controller: ServicesComponent
  });

})();
