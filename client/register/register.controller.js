(function () {
	'use strict';

	angular
		.module('app')
		.controller('RegisterController', RegisterController);

	RegisterController.$inject = [
		"$state",
		"store",
		"sessionFactory"
	];

	function RegisterController($state, store, sessionFactory) {
		/* jshint validthis: true */
		var vm = this;

		vm.register = register;
		//////////

		function register() {
      sessionFactory.register(vm.new_user)
      	.then(function() {
        	$state.go('home');
      	});
    }
	}
})();