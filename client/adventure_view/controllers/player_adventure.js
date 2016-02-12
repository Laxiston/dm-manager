'use strict';

angular.module('app')
	.controller('PlayerPageCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.pageChange = function() {
					if ($scope.page_select) {
						$state.go("home.adventure_view.player." + $scope.page_select);
					};
				}
			}
		]
	);