(function () {
	'use strict';

	angular
		.module('app')
		.factory('sessionFactory', sessionFactory);

	sessionFactory.$inject = [
		"$http",
		"store",
		"jwtHelper"
	];

	function sessionFactory($http, store, jwtHelper) {
	  var factory = {
	  	login			: login,
	  	register	: register,
	  	getMe			: getMe
	  };

	  return factory;
	  //////////
	  
	  function login(user) {
      return $http.post('/login', user)
        .then(loginSucceeded)
        .catch(loginFailed);

      function loginSucceeded(response) {
      	store.set('jwt', response.data.id_token);
        return response.data;
      }

      function loginFailed(error) {
        alert('XHR Failed for login: ' + error.data);
      }
    }

    function register(new_user) {
      return $http.post('/add/user', new_user)
        .then(registerSucceeded)
        .catch(registerFailed);

      function registerSucceeded(response) {
      	store.set('jwt', response.data.id_token);
        return response.data;
      }

      function registerFailed(error) {
        alert('XHR Failed for register: ' + error.data);
      }
    }

	  function getMe() {
	  	return jwtHelper.decodeToken(store.get("jwt"));
	  }
	}
})();