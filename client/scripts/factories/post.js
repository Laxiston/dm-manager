'use strict';

angular.module('forum')
	.factory('PostFactory', ["$http", function($http) {
  var factory = {};
  factory.add = function(new_post, callback) {
    $http.post('/add/post', new_post)
      .then(function (response) {
        callback();
      }, function (error){
        throw error;
      });
  }
  factory.upvote = function(post_id, callback) {
    $http.post('/upvote/post/' + post_id)
      .then(function (response) {
        callback();
      }, function (error){
        throw error;
      });
  }
  factory.downvote = function(post_id, callback) {
    $http.post('/downvote/post/' + post_id)
      .then(function (response) {
        callback();
      }, function (error){
        throw error;
      });
  }
  return factory;
}]);