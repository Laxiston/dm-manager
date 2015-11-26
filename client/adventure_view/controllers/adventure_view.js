'use strict';

angular.module('dmtool')
	.controller('AdventureViewCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.dm = true;
				$scope.tabs = [
			    {
			    	heading:'DM',
			    	active: true
			    },
			    {
			    	heading:'P1'
			    }
			  ];

				$scope.selectTab = function(tab) {
					if(tab.heading === "DM") {
						$state.go("home.adventure_view.dm.adventure");
					}
					else {
						$state.go("home.adventure_view.player.character_stats");
					}
				}
			}
		]
	);