'use strict';

angular.module('dmtool')
	.controller('AdventureViewCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.dm = true;

				$scope.pageChange = function() {
					if ($scope.page.select == "bestiary") {
						$state.go("home.adventure_view.player.test");
					};
				}
			}
		]
	);