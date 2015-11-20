'use strict';

angular.module('dmtool')
	.controller('RegisterCtrl', ["$http", "$scope", "$state", "store", function($http, $scope, $state, store) {
    $scope.register = function() {
    	console.log($scope.user);
      $http({
	      url: '/add/user',
	      method: 'POST',
	      data: $scope.user
	    })
	    .then(
	    	function(response) {
		      store.set('jwt', response.data.id_token);
		      $state.go('root.home');
		    },
		    function(error) {
		      alert(error.data);
		    }
		   );
    }
}]);