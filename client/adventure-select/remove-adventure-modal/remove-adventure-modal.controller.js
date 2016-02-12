(function () {
  'use strict';

  angular
    .module('app')
    .controller('RemoveAdventureModalController', controller);

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
        templateUrl: 'remove-adventure-modal.html',
        controller: 'RemoveAdventureModalInstanceController',
        controllerAs: 'vm',
      });
    };
  }
})();