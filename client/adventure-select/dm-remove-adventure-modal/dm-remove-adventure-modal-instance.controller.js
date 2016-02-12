(function () {
  'use strict';

  angular
    .module('app')
    .controller('DMRemoveAdventureModalInstanceController', controller);

  controller.$inject = [
    "$uibModalInstance"
  ];

  function controller($uibModalInstance) {
    /* jshint validthis: true */
    var vm = this;
    
    vm.ok = ok;
    vm.cancel = cancel;
    //////////

    function ok() {
      $uibModalInstance.close();
    };
    function cancel() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();