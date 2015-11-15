'use strict';

angular.module('forum')
	.factory('TopicFactory', ["$http", function($http) {
  var factory = {};
  factory.all = function(callback) {
    $http.get('/topics')
      .then(function (response) {
        callback(response.data);
      }, function (error) {
        throw error;
      });
  }
  factory.get_one = function(topic_id, callback) {
    $http.get('/topics/' + topic_id)
      .then(function (response) {
        callback(response.data);
      }, function (error) {
        throw error;
      });
  }
  factory.add = function(new_topic, callback) {
    $http.post('/add/topic', new_topic)
      .then(function (response) {
        callback();
      }, function (error){
        throw error;
      });
  }
  return factory;
}]);