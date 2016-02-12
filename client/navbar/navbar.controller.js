(function () {
	'use strict';

	angular
		.module('app')
		.controller('NavbarController', NavbarController);

	NavbarController.$inject = [
		"$state",
		"$rootScope",
		"store"
	];

	function NavbarController($state, $rootScope, store) {
		/* jshint validthis: true */
		var vm = this;
		vm.logout = logout;
		vm.hidden = $state.current.data.hide_navbar;
		//////////

    function logout() {
      store.remove('jwt');
      $state.go('root');
    }

    var verify_navbar = $rootScope.$on("$stateChangeStart", function (e, to) {
      if (to.data.hide_navbar === true){
      	vm.hidden = true;
      };
    })
	}
})();