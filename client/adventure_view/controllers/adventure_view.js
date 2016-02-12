'use strict';

angular.module('app')
	.controller('AdventureViewCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.dm = true;
				$scope.tabs = [
			    {
			    	heading:'DM',
			    	active: true,
			    	route: "home.adventure_view.dm.adventure"
			    },
			    {
			    	heading:'P1',
			    	route: "home.adventure_view.player.character_stats"
			    }
			  ];
			}
		]
	);