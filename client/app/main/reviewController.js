angular.module('serviceFinderApp').controller('reviewAddCtrl', function($scope, $uibModalInstance, $http){
  $scope.review = {};
  $scope.ok = function () {
    $http({
      url: "/api/reviews",
      method: "POST",
      data: $scope.review
    })
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss();
  };
});
