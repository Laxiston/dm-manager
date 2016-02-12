'use strict';

angular.module('app').controller('RemoveAdventureModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'remove_adventure_modal.html',
      controller: 'RemoveAdventureModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('RemoveAdventureModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);