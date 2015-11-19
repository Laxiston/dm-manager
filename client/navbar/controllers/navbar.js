'use strict';

angular.module('dmtool')
	.controller('NavbarCtrl', 
		[
							"$rootScope", "$scope", "$state", "store", 
			function($rootScope,   $scope,   $state,   store) {
	      $scope.logout = function() {
	        store.remove('jwt');
	        $state.go('root');
	      }
			}
		]
	);