'use strict';

angular.module('forum')
	.controller('TopicController', ["$rootScope", "$scope", "$routeParams", "$location", "TopicFactory", "PostFactory", "CommentFactory", function($rootScope, $scope, $routeParams, $location, TopicFactory, PostFactory, CommentFactory) {
  if (!$rootScope.me) {
    $location.path("/");
  }
  else {
    $scope.me = $rootScope.me;
    TopicFactory.get_one($routeParams.id, function(data) {
      $scope.topic = data;
    });
    $scope.add_post = function() {
      var data = $scope.new_post;
      if (data) {
        data.user_id = $scope.me._id;
        data.topic_id = $scope.topic._id;
        PostFactory.add(data, function() {
          TopicFactory.get_one($routeParams.id, function(data) {
            $scope.topic = data;
          });
          $scope.new_post = null;
        });
      };
    }
    $scope.add_comment = function(post_id, comment) {
      var data = {};
      data.content = comment;
      data.post_id = post_id;
      if (data) {
        data.user_id = $scope.me._id;
        console.log(data);
        CommentFactory.add(data, function() {
          TopicFactory.get_one($routeParams.id, function(data) {
            $scope.topic = data;
          });
          $scope.new_comment = null;
        });
      };
    }
    $scope.upvote = function(post_id) {
      PostFactory.upvote(post_id, function() {
        TopicFactory.get_one($routeParams.id, function(data) {
          $scope.topic = data;
        });
      });
    }
    $scope.downvote = function(post_id) {
      PostFactory.downvote(post_id, function() {
        TopicFactory.get_one($routeParams.id, function(data) {
          $scope.topic = data;
        });
      });
    }
  }
}]);