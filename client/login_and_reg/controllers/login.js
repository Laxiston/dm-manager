'use strict';

angular.module('dmtool')
	.controller('LoginCtrl', ["$http", "$scope", "$state", "store", function($http, $scope, $state, store) {
      $scope.login = function() {
        $http({
          url: '/login',
          method: 'POST',
          data: $scope.user
        })
        .then(
          function(response) {
            store.set('jwt', response.data.id_token);
            $state.go('root.home');
          },
          function(error) {
            alert(error.data);
          }
        );
      }
}]);