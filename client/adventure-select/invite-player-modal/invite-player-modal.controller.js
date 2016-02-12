(function () {
  'use strict';

  angular
    .module('app')
    .controller('InvitePlayerModalController', controller);

  controller.$inject = [
    "$uibModal"
  ];

  function controller($uibModal) {
    /* jshint validthis: true */
    var vm = this;
    vm.open = open;
    //////////

    function open() {
      var modalInstance = $uibModal.open({
        templateUrl: 'invite-player-modal.html',
        controller: 'InvitePlayerModalInstanceController',
        controllerAs: 'vm',
      });
    };
  }
})();