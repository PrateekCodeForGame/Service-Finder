'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, $sce) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

    $scope.videoUrl = "https://www.youtube.com/watch?v=04RnCJohvFY";
    $scope.videoUrl = $scope.videoUrl.replace("watch?v=", "v/");
    console.log($scope.videoUrl);

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('serviceFinderApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
