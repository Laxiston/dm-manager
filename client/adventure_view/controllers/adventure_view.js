angular.module('dmtool').controller('AdventureViewCtrl', function ($state, $scope, $window) {
	$state.go("root.home.adventure_view.player");
	$scope.dm = false;
});