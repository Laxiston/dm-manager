(function () {
  'use strict';

  angular
    .module('app')
    .controller('PlayerPageController', controller);

  controller.$inject = [
    "$state"
  ];

  function controller($state) {
    /* jshint validthis: true */
    var vm = this;

    vm.pageChange = pageChange;
    //////////

    function pageChange() {
      if (vm.page_select) {
        $state.go("home.adventure-view.player." + vm.page_select);
      };
    }
  }
})();