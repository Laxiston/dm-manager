'use strict';

angular.module('app').controller('InvitePlayerModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'invite_player_modal.html',
      controller: 'InvitePlayerModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('InvitePlayerModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);