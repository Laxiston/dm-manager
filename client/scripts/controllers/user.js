'use strict';

angular.module('forum')
	.controller('UserController', ["$rootScope", "$scope", "$routeParams", "$location", "UserFactory", function($rootScope, $scope, $routeParams, $location, UserFactory) {
  if (!$rootScope.me) {
    $location.path("/");
  }
  else {
    $scope.me = $rootScope.me;
    UserFactory.get_one($routeParams.id, function(data) {
      $scope.user = data;
    });
  }
}]);