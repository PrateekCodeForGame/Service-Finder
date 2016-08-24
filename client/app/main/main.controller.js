'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, $sce, $state, allData, $uibModal) {
      this.$http = $http;
      this.socket = socket;
      $scope.jobs = [];
      $scope.reviews = [];
      $scope.currentReview = 0;

      allData.getAllJobs().then(function(response){
        $scope.jobs = response;
      });

      allData.getAllReviews().then(function(response){
        $scope.reviews = response;
      });

      $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
      }

      $scope.videoUrl = "https://www.youtube.com/watch?v=04RnCJohvFY";
      $scope.videoUrl = $scope.videoUrl.replace("watch?v=", "embed/");

      $scope.nav1 = "selected-nav";
      $scope.nav2 = "";
      $scope.nav3 = "";
      $scope.navText = "Offertlistan hjälper dig att hitta kontrollerade tjänsteföretag som kan hjälpa dig i hemmet, på kontoret eller i din bostadsrättsförening. Beskriv ditt behov och ta emot upp till sex offerter från lokala tjänsteföretag.";

      $state.go('main.quotation');

      $scope.nav1Clicked = function() {
        $scope.nav1 = "selected-nav";
        $scope.nav2 = "";
        $scope.nav3 = "";
        $scope.navText = "Offertlistan hjälper dig att hitta kontrollerade tjänsteföretag som kan hjälpa dig i hemmet, på kontoret eller i din bostadsrättsförening. Beskriv ditt behov och ta emot upp till sex offerter från lokala tjänsteföretag.";
      }

      $scope.nav2Clicked = function() {
        $scope.nav2 = "selected-nav";
        $scope.nav1 = "";
        $scope.nav3 = "";
        $scope.navText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
      }

      $scope.nav3Clicked = function() {
        $scope.nav3 = "selected-nav";
        $scope.nav2 = "";
        $scope.nav1 = "";
        $scope.navText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
      }

      $scope.openReviewModal = function() {
        var modalInstance = $uibModal.open({
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'reviewAdd.html',
          controller: 'reviewAddCtrl',
        });
      }

      $scope.next = function() {
        if($scope.currentReview < ($scope.reviews.length - 1)){
          $scope.currentReview += 1;
        }
      }

      $scope.back = function() {
        if($scope.currentReview > 0){
          $scope.currentReview -= 1;
        }
      }

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
        this.$http.post('/api/things', {
          name: this.newThing
        });
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
