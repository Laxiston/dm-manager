(function () {
  'use strict';

  angular
    .module('app')
    .controller('AdventureSelectController', controller);

  controller.$inject = [
    "adventureFactory",
    "sessionFactory",
    "$uibModal",
    "$log"
  ];

  function controller(adventureFactory, sessionFactory, $uibModal, $log) {
    /* jshint validthis: true */
    var vm = this;


    vm.adventures = [];
    vm.me = sessionFactory.getMe();
    vm.createAdventure = createAdventure;
    vm.removeAdventure = removeAdventure;

    getAdventures();
    //////////

    function getAdventures() {
      adventureFactory.get()
        .then(getSucceeded)
        .catch(fail);

      function getSucceeded(data) {
        vm.adventures = data;
      }
    }

    function createAdventure() {
      var data = vm.new_adventure;
      data.dm_id = vm.me._id;
      adventureFactory.create(data)
        .then(createSucceeded)
        .catch(fail);

      function createSucceeded(data) {
        vm.adventures.push(data);
        resetAdventure();
      }
    }

    function removeAdventure(adv) {
      $uibModal.open({
        templateUrl: 'remove-adv-modal.html',
        controller: 'RemoveAdvModalController as vm',
        resolve: {
          adventure: function() {
            return adv;
          },
          parent: function() {
            return vm;
          }
        }
      });
    }

    function invitePlayer(adv) {
      $uibModal.open({
        templateUrl: 'invite-player-modal.html',
        controller: 'InvitePlayerModalController as vm'
      });
    }

    function resetAdventure() {
      vm.new_adventure = null;
    }

    function fail(err) {
      alert('Adventure Select Controller XHR Failed: ' + err.data);
    }
  }
})();