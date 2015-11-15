var forum = angular.module('forum', ['ngRoute']);

forum.config(["$routeProvider", function ($routeProvider) {
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

forum.controller('LoginController', ["$rootScope", "$scope", "$location", "UserFactory", function($rootScope, $scope, $location, UserFactory) {
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

forum.controller('UserController', ["$rootScope", "$scope", "$routeParams", "$location", "UserFactory", function($rootScope, $scope, $routeParams, $location, UserFactory) {
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

forum.controller('DashboardController', ["$rootScope", "$scope", "$location", "TopicFactory", "CategoryFactory", "UserFactory", function($rootScope, $scope, $location, TopicFactory, CategoryFactory, UserFactory) {
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

forum.controller('TopicController', ["$rootScope", "$scope", "$routeParams", "$location", "TopicFactory", "PostFactory", "CommentFactory", function($rootScope, $scope, $routeParams, $location, TopicFactory, PostFactory, CommentFactory) {
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

forum.factory('UserFactory', ["$http", function($http) {
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

forum.factory('CategoryFactory', ["$http", function($http) {
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

forum.factory('TopicFactory', ["$http", function($http) {
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

forum.factory('CommentFactory', ["$http", function($http) {
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

forum.factory('PostFactory', ["$http", function($http) {
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