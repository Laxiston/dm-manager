'use strict';

angular.module('forum', ['ngRoute'])
	.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    })
    .when('/dashboard/:id',{
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardController'
    })
    .when('/topic/:id',{
        templateUrl: 'partials/topic.html',
        controller: 'TopicController'
    })
    .when('/user/:id',{
        templateUrl: 'partials/user.html',
        controller: 'UserController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);