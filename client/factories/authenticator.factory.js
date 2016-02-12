(function () {
	'use strict';

	angular
		.module('app')
		.factory("authenticator", authenticatorService);

	authenticatorService.$inject = [
		"$state",
		"store",
		"jwtHelper"
	];

	function authenticatorService($state, store, jwtHelper) {
		var service = {
			authenticate: authenticate
		};
		
		return service;
		//////////

		function authenticate(e, to){
	  	var token = store.get("jwt");
	  	if (token) {
		  	var expired = jwtHelper.isTokenExpired(token);
	  	};

	    if (to.data && to.data.requiresLogin) {
	      if (!token || expired) {
	        e.preventDefault();
	        $state.go('root');
	      }
	      if (to.params && to.params.autoActivateChild) {
	        e.preventDefault();
	        $state.go(to.params.autoActivateChild);
	      }
	    }
	    if (to.data && !to.data.requiresLogin) {
	    	if (token && !expired) {
	        e.preventDefault();
	        $state.go('home');
	      }
	    }
		}
	}
})();