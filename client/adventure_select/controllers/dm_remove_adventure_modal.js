'use strict';

angular.module('app').controller('DMRemoveAdventureModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'dm_remove_adventure_modal.html',
      controller: 'DMRemoveAdventureModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('DMRemoveAdventureModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);