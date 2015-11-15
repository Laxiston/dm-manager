'use strict';

angular.module('forum')
	.factory('CategoryFactory', ["$http", function($http) {
  var factory = {};
  factory.all = function(callback) {
    $http.get('/categories')
      .then(function (response) {
        callback(response.data);
      }, function (error) {
        throw error;
      });
  }
  return factory;
}]);