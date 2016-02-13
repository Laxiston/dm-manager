(function () {
  'use strict';

  angular
    .module('app')
    .controller('AdventureSelectController', controller);

  controller.$inject = [
    "adventureFactory",
    "sessionFactory"
  ];

  function controller(adventureFactory, sessionFactory) {
    /* jshint validthis: true */
    var vm = this;

    vm.adventures = [];
    vm.me = sessionFactory.getMe();
    vm.createAdventure = createAdventure;

    //////////

    // function getAdventures() {
    //   adventureFactory.adventures()
    //     .then(function(data) {
    //       return data;
    //     });
    // }

    function createAdventure() {
      var data = vm.new_adventure;
      data.user_id = vm.me._id;
      adventureFactory.create(data)
        .then(function(res) {
          vm.adventures.push(res);
          vm.new_adventure = null;
        });
    }
  }
})();