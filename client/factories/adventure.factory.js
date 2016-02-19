(function () {
	'use strict';

	angular
		.module('app')
		.factory('adventureFactory', factory);

	factory.$inject = [
		"$http",
    "$log"
	];

	function factory($http, $log) {
	  var factory = {
	  	create: create,
	  	get: get,
      destroy: destroy,
      leave: leave
	  };
	  return factory;
	  //////////

	  function get() {
      return $http.get('/adventures')
        .then(getSucceeded)
        .catch(fail);

      function getSucceeded(response) {
        return response.data;
      }
    }

    function create(adventure) {
      return $http.post('/adventures', adventure)
        .then(createSucceeded)
        .catch(fail);

      function createSucceeded(response) {
        return response.data;
      }
    }

    function destroy(id) {
    	return $http.delete('/adventures/' + id)
        .then(destroySucceeded)
        .catch(fail);

      function destroySucceeded(response) {
        return response.data;
      }
    }

    function leave(adv_id, user_id) {
    	return $http.post('/adventures/' + adv_id + '/leave', {user_id: user_id})
        .then(leaveSucceeded)
        .catch(fail);

      function leaveSucceeded(response) {
        return response.data;
      }
    }

    function fail(error) {
      alert('Adventure Factory XHR failed: ' + error.data);
    }

	}
})();