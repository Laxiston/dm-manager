'use strict';

angular.module('forum')
	.factory('UserFactory', ["$http", function($http) {
  var factory = {};

  factory.get_one = function(user_id, callback) {
    $http.get('/users/' + user_id)
      .then(function (response) {
        callback(response.data);
      }, function (error) {
        throw error;
      });
  }
  factory.login = function(user, callback) {
    $http.post('/login', user)
      .then(function (response) {
        if (response != "incorrect") {
          callback(response.data);
        }
      }, function (error) {
        throw error;
      });
  }
  factory.register = function(new_user, callback) {
    $http.post('/add/user', new_user)
      .then(function (response) {
        callback(response.data);
      }, function (error){
        throw error;
      });
  }
  factory.logout = function(callback){
    $rootScope.me = null;
  }

  return factory;
}]);