'use strict';

angular.module('forum')
	.controller('DashboardController', ["$rootScope", "$scope", "$location", "TopicFactory", "CategoryFactory", "UserFactory", function($rootScope, $scope, $location, TopicFactory, CategoryFactory, UserFactory) {
  if ($rootScope.me) {
    $scope.me = $rootScope.me;
    TopicFactory.all(function(data) {
      $scope.topics = data;
    });
    CategoryFactory.all(function(data) {
      $scope.categories = data;
    });
    $scope.add = function(user_id) {
      var data = $scope.new_topic;
      if (data) {
        data.user_id = user_id;
        TopicFactory.add(data, function() {
          TopicFactory.all(function(data) {
            $scope.topics = data;
          });
          $scope.new_topic = null;
        });
      };
    }
  }
  else $location.path("/");
}]);