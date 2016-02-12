(function () {
  'use strict';

  angular
    .module('app')
    .controller('DMRemoveAdventureModalController', controller);

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
        templateUrl: 'dm-remove-adventure-modal.html',
        controller: 'DMRemoveAdventureModalInstanceController',
        controllerAs: 'vm',
      });
    };
  }
})();