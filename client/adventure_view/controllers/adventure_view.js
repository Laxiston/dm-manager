angular.module('dmtool').controller('AdventureViewCtrl', function ($state, $scope, $window) {
	$state.go("home.adventure_view.player");
	$scope.dm = false;
	$scope.hidden = true;
});