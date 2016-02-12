(function () {
  'use strict';

  angular
    .module('app')
    .controller('AdventureViewController', controller);

  controller.$inject = [];

  function controller() {
    /* jshint validthis: true */
    var vm = this;

    vm.dm = true;
    vm.tabs = [
      {
        heading:'DM',
        active: true,
        route: "home.adventure-view.dm.adventure"
      },
      {
        heading:'P1',
        route: "home.adventure-view.player.character-stats"
      }
    ];
    //////////
  }
})();