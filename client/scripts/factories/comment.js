'use strict';

angular.module('forum')
	.factory('CommentFactory', ["$http", function($http) {
  var factory = {};
  factory.add = function(new_comment, callback) {
    $http.post('/add/comment', new_comment)
      .then(function (response) {
        callback();
      }, function (error){
        throw error;
      });
  }
    return factory;
}]);