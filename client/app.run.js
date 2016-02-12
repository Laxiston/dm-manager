(function () {
	'use strict';

	angular
		.module('app')
		.run(runBlock);

	runBlock.$inject = [
		"$rootScope",
		"authenticator"
	];

	function runBlock($rootScope, authenticator) {
		$rootScope.$on('$stateChangeStart', function(e, to) {
			authenticator.authenticate(e, to);
	  });
	}
})();