'use strict';

angular.module('app')
	.controller('NavbarController', 
		[
							 "$rootScope", "$scope", "$state", "store", 
			function ($rootScope,   $scope,   $state,   store) {
	      $scope.logout = function() {
	        store.remove('jwt');
	        $state.go('root');
	      }

	      if ($state.current.data.hide_navbar === true) {
	      	$scope.hidden = true;
	      };

	      $rootScope.$on("$stateChangeStart", function (e, to) {
		      if (to.data.hide_navbar === true){
		      	$scope.hidden = true;
		      };
	      })
			}
		]
	);

// (function () {
// 	'use strict';

// 	angular
// 		.module('app')
// 		.controller('NavbarController', NavbarController);

// 	NavbarController.$inject = [
// 		"$state",
// 		"$rootScope",
// 		"store",
// 	];

// 	function NavbarController($state, store, sessionFactory) {
// 		/* jshint validthis: true */
// 		var vm = this;

// 		vm.logout = logout;
// 		vm.hidden = $state.current.data.hide_navbar === true;
// 		//////////

//     $rootScope.$on("$stateChangeStart", function (e, to) {
//       if (to.data.hide_navbar === true){
//       	vm.hidden = true;
//       };
//     })

//     function logout() {
//       store.remove('jwt');
//       $state.go('root');
//     }
// 	}
// })();