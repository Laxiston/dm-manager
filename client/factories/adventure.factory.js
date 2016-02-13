(function () {
	'use strict';

	angular
		.module('app')
		.factory('adventureFactory', factory);

	factory.$inject = [
		"$http"
	];

	function factory($http) {
	  var factory = {
	  	create: create,
	  	adventures: adventures
	  };

	  return factory;
	  //////////

    function create(adventure) {
      return $http.post('/adventures', adventure)
        .then(createSucceeded)
        .catch(createFailed);

      function createSucceeded(response) {
        return response.data;
      }

      function createFailed(error) {
        alert('XHR Failed for create: ' + error.data);
      }
    }
	}
})();