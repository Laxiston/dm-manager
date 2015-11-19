angular.module('dmtool').controller('AdventureViewTabsCtrl', function ($state, $scope, $window) {
	$scope.initialise = function() {
    $scope.go = function(state) {
      $state.go(state);
    };
	  $scope.tabs = [
	    {
	    	heading:'DM',
	    	route:'home.adventure_view.dm',
	    	active: true,
	    	params: {},
	    	options: {}
	    },
	    { heading:'P1', route:'home.adventure_view.player' }
	  ];
  };

  $scope.initialise();
});