'use strict';
(function(){

class CategoriesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('serviceFinderApp')
  .component('categories', {
    templateUrl: 'app/main/categories/categories.html',
    controller: CategoriesComponent
  });

})();
