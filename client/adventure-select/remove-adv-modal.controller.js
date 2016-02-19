(function () {
  'use strict';

  angular
    .module('app')
    .controller('RemoveAdvModalController', controller);

  controller.$inject = [
    "$uibModalInstance",
    "sessionFactory",
    "adventureFactory",
    "$log",
    "adventure",
    "parent"
  ];

  function controller($uibModalInstance, sessionFactory, adventureFactory, $log, adventure, parent) {
    /* jshint validthis: true */

    var vm = this;
    vm.me = sessionFactory.getMe();
    vm.ok = ok;
    vm.cancel = cancel;
    vm.isDM = adventure.dm_id === vm.me._id;
    //////////

    function removeAdventure() {
      // $log.log(vm);
      if (vm.isDM) {
        adventureFactory.destroy(adventure._id)
          .then(removeSuccess)
          .catch(fail);
      } else {
        adventureFactory.leave(adventure._id, vm.me._id)
          .then(removeSuccess)
          .catch(fail);
      }
        
      function removeSuccess(result) {
        // TODO: implement faster search, as adventures will be sorted in increasing order
        for (var i = 0; i < parent.adventures.length; i++) {
          if (parent.adventures[i]._id === result._id) {
            parent.adventures.splice(i, 1);
            i = parent.adventures.length;
          }
        }
      }
    }

    function ok() {
      removeAdventure();
      $uibModalInstance.close();
    }

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    }

    function fail(error) {
      alert('Remove Aventure Modal Controller XHR Failed: ' + err.data);
    }
  }
})();