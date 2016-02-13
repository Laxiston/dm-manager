(function () {
	'use strict';

	angular
		.module('app')
		.controller('RegisterController', controller);

	controller.$inject = [
		"$state",
		"store",
		"sessionFactory"
	];

	function controller($state, store, sessionFactory) {
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