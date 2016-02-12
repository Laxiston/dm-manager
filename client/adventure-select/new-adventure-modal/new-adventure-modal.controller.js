(function () {
  'use strict';

  angular
    .module('app')
    .controller('NewAdventureModalController', controller);

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
        templateUrl: 'new-adventure-modal.html',
        controller: 'NewAdventureModalInstanceController',
        controllerAs: 'vm',
      });
    };
  }
})();