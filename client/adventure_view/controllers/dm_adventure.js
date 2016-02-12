'use strict';

angular.module('app')
	.controller('DMPageCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.pageChange = function() {
					if ($scope.page_select) {
						$state.go("home.adventure_view.dm." + $scope.page_select);
					};
				}
			}
		]
	);