'use strict';

angular.module('forum')
	.controller('LoginController', ["$rootScope", "$scope", "$location", "UserFactory", function($rootScope, $scope, $location, UserFactory) {
  if ($rootScope.me) {
    $scope.me = $rootScope.me;
    $location.path("/dashboard/" + $rootScope.me.name);
  }
  else {
    $scope.register = function() {
      UserFactory.register($scope.new_user, function(data) {
        if (data == "User already exists.") {
          console.log(data);
        }
        else {
          $rootScope.me = data;
          $location.path("/dashboard/" + data.name);
        }
      });
    }
    $scope.login = function() {
      UserFactory.login($scope.user, function(data) {
        if (data == "User doesn't exist.") {
          console.log(data);
        }
        else if(data == "Incorrect password.") {
          console.log(data);
        }
        else {
          $rootScope.me = data;
          $location.path("/dashboard/" + data.name);
        } 
      });
    }
  }
}]);