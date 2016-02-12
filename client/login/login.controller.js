(function () {
	'use strict';

	angular
		.module('app')
		.controller('LoginController', LoginController);

	LoginController.$inject = [
		"$state",
		"store",
		"sessionFactory"
	];

	function LoginController($state, store, sessionFactory) {
		/* jshint validthis: true */
		var vm = this;

		vm.login = login;
		//////////

    function login() {
      sessionFactory.login(vm.user)
      	.then(function() {
	        $state.go('home');
	      });
    }
	}
})();