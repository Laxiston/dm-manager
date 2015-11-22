'use strict';

angular.module('dmtool')
	.controller('AdventureViewCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.dm = false;

				$scope.pageChange = function() {
					if ($scope.left_page.select == "bestiary") {
						$state.go("home.adventure_view.player.test");
					};
				}
			}
		]
	);