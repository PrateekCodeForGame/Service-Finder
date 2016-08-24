'use strict';
(function(){

class AboutusComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('serviceFinderApp')
  .component('aboutus', {
    templateUrl: 'app/aboutus/aboutus.html',
    controller: AboutusComponent
  });

})();
