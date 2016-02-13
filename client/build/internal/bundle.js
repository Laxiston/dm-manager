(function () {
  'use strict';

  angular.module('app', [
    'angular-jwt',
    'angular-storage',
    'ui.bootstrap',
    'ui.router',
    'ui.router.tabs',
    'ui.router.stateHelper',
  ]);
})();
(function () {
  'use strict';

  angular
    .module('app')
    .config(routes);

  routes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    'jwtInterceptorProvider',
    'stateHelperProvider'
  ];

  function routes($stateProvider, $urlRouterProvider, jwtInterceptorProvider, stateHelperProvider) {
    $urlRouterProvider.otherwise('/');

    stateHelperProvider
      .state({
        name: 'root',
        url: '/',
        data: {
          requiresLogin: false
        },
        views: {
          'header' : {
            templateUrl: './navbar/navbar.html'
          },
          'content' : {
            templateUrl: './login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
          }
        },
        children: [
          {
            name: 'register',
            url: '/register',
            views: {
              'content@' : {
                templateUrl: 'register/register.html',
                controller: 'RegisterController',
                controllerAs: 'vm'
              }
            }
          },
          {
            name: 'forgot-info',
            url: '/forgot-info',
            views: {
              'content@' : {
                templateUrl: 'forgot-info/forgot-info.html'
              }
            }
          }
        ]
      })
      .state({
        name: 'home',
        url: '/home',
        data: {
          requiresLogin: true
        },
        views: {
          'header@' : {
            templateUrl: 'navbar/navbar-internal.html',
            controller: 'NavbarController',
            controllerAs: 'vm'
          },
          'content@' : {
            templateUrl: 'adventure-select/adventure-select.html'
          }
        },
        children: [
          {
            name: 'new-adventure',
            url: '/new-adventure',
            views: {
              'content@' : {
                templateUrl: 'new-adventure/new-adventure.html'
              }
            }
          },
          {
            name: 'create-char',
            url: '/create-char',
            views: {
              'content@' : {
                templateUrl: 'new-adventure/character-create.html'
              } 
            }
          },
          {
            name: 'roll-new-char',
            url: '/roll-new-char',
            views: {
              'content@' : {
                templateUrl: 'new-adventure/roll-new-char.html',
                controller: 'RollNewAccordionController',
                controllerAs: 'vm'
              } 
            }
          },
          {
            name: 'adventure-view',
            url: '/adventure-view',
            views: {
              'content@' : {
                templateUrl: 'adventure-view/adventure-view.html',
                controller: 'AdventureViewController',
                controllerAs: 'vm'
              }
            },
            params: {
              autoActivateChild: 'home.adventure-view.dm.adventure'
            },
            data: {
              hide_navbar: true
            },
            children: [
              {
                name: 'dm',
                url: '/dm',
                abstract: true,
                data: {
                  requiresDM: true
                },
                children:[
                  {
                    name: 'adventure',
                    url: '/adventure',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/dm/adventure.html',
                        controller: 'DMPageController'
                      }
                    }
                  },
                  {
                    name: 'bestiary',
                    url: '/bestiary',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/dm/bestiary.html',
                        controller: 'DMPageController'
                      }
                    }
                  },
                  {
                    name: 'monster-info',
                    url: '/monster-info',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/dm/monster-info.html',
                        controller: 'DMPageController'
                      }
                    }
                  },
                  {
                    name: 'notes',
                    url: '/notes',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/dm/notes.html',
                        controller: 'DMPageController'
                      }
                    }
                  },
                  {
                    name: 'note',
                    url: '/note',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/dm/note.html',
                        controller: 'DMPageController'
                      }
                    }
                  },
                  {
                    name: 'treasury',
                    url: '/treasury',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/dm/treasury.html',
                        controller: 'DMPageController'
                      }
                    }
                  }
                ]
              },
              {
                name: 'player',
                url: '/player',
                abstract: true,
                data: {
                  requiresDM: false
                },
                children:[
                  {
                    name: 'character-stats',
                    url: '/character-stats',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/player/character-stats.html',
                        controller: 'PlayerPageController'
                      }
                    }
                  },
                  {
                    name: 'cooldown-counter',
                    url: '/cooldown-counter',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/player/cooldown-counter.html',
                        controller: 'PlayerPageController'
                      }
                    }
                  },
                  {
                    name: 'spell-book',
                    url: '/spell-book',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/player/spell-book.html',
                        controller: 'PlayerPageController'
                      }
                    }
                  },
                  {
                    name: 'spell-info',
                    url: '/spell-info',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/player/spell-info.html',
                        controller: 'PlayerPageController'
                      }
                    }
                  },
                  {
                    name: 'notes',
                    url: '/notes',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/player/notes.html',
                        controller: 'PlayerPageController'
                      }
                    }
                  },
                  {
                    name: 'note',
                    url: '/note',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/player/note.html',
                        controller: 'PlayerPageController'
                      }
                    }
                  },
                  {
                    name: 'roleplay',
                    url: '/roleplay',
                    views: {
                      'page@home.adventure-view' : {
                        templateUrl: 'adventure-view/pages/player/roleplay.html',
                        controller: 'PlayerPageController'
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      });
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  runBlock.$inject = [
    '$rootScope',
    'authenticator',
  ];

  function runBlock($rootScope, authenticator) {
    var auth = $rootScope.$on('$stateChangeStart', authenticate);

    function authenticate(e, to) {
      authenticator.authenticate(e, to);
    }
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('AdventureSelectController', controller);

  controller.$inject = [
    "adventureFactory",
    "sessionFactory"
  ];

  function controller(adventureFactory, sessionFactory) {
    /* jshint validthis: true */
    var vm = this;

    vm.adventures = [];
    vm.me = sessionFactory.getMe();
    vm.createAdventure = createAdventure;

    //////////

    // function getAdventures() {
    //   adventureFactory.adventures()
    //     .then(function(data) {
    //       return data;
    //     });
    // }

    function createAdventure() {
      var data = vm.new_adventure;
      data.user_id = vm.me._id;
      adventureFactory.create(data)
        .then(function(data) {
          vm.adventures.push(data);
          vm.new_adventure = null;
        });
    }
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('DMRemoveAdventureModalInstanceController', controller);

  controller.$inject = [
    "$uibModalInstance"
  ];

  function controller($uibModalInstance) {
    /* jshint validthis: true */
    var vm = this;
    
    vm.ok = ok;
    vm.cancel = cancel;
    //////////

    function ok() {
      $uibModalInstance.close();
    };
    function cancel() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('DMRemoveAdventureModalController', controller);

  controller.$inject = [
    "$uibModal"
  ];

  function controller($uibModal) {
    /* jshint validthis: true */
    var vm = this;
    vm.open = open;
    //////////

    function open() {
      var modalInstance = $uibModal.open({
        templateUrl: 'dm-remove-adventure-modal.html',
        controller: 'DMRemoveAdventureModalInstanceController',
        controllerAs: 'vm',
      });
    };
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('InvitePlayerModalInstanceController', controller);

  controller.$inject = [
    "$uibModalInstance"
  ];

  function controller($uibModalInstance) {
    /* jshint validthis: true */
    var vm = this;
    vm.ok = ok;
    vm.cancel = cancel;
    //////////

    function ok() {
      $uibModalInstance.close();
    };
    function cancel() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('InvitePlayerModalController', controller);

  controller.$inject = [
    "$uibModal"
  ];

  function controller($uibModal) {
    /* jshint validthis: true */
    var vm = this;
    vm.open = open;
    //////////

    function open() {
      var modalInstance = $uibModal.open({
        templateUrl: 'invite-player-modal.html',
        controller: 'InvitePlayerModalInstanceController',
        controllerAs: 'vm',
      });
    };
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('NewAdventureModalInstanceController', controller);

  controller.$inject = [
    "$uibModalInstance"
  ];

  function controller($uibModalInstance) {
    /* jshint validthis: true */
    var vm = this;
    vm.ok = ok;
    vm.cancel = cancel;
    //////////

    function ok() {
      $uibModalInstance.close();
    };
    function cancel() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('NewAdventureModalController', controller);

  controller.$inject = [
    "$uibModal"
  ];

  function controller($uibModal) {
    /* jshint validthis: true */
    var vm = this;
    vm.open = open;
    //////////

    function open() {
      var modalInstance = $uibModal.open({
        templateUrl: 'new-adventure-modal.html',
        controller: 'NewAdventureModalInstanceController',
        controllerAs: 'vm',
      });
    };
  }
})();
// (function () {
// 	'use strict';

// 	angular
// 		.module('app')
// 		.directive('rtNewAdventureModal', newAdventureModal);

// 	function newAdventureModal() {

// 		// FIXME: created a template string for the HTML because of cross-origin policy errors when using templateUrl

// 		var templateString = `
// 			<div>
// 			  <script type="text/ng-template" id="new_adventure_modal.html">
// 			  	<div class="modal-header">
// 					  <h3 class="modal-title">New adventure!</h3>
// 					</div>
// 					<div class="modal-body">
// 						<form>
// 							<div class="form-group">
// 								<label><h4>What would you like to call your new adventure?</h4></label>
// 								<input type='text' placeholder='Adventure Name' class='form-control' name="adventure_name" required>
// 							</div>
// 							<div class="form-group">
// 								<h4>Are you the DM?</h4>
// 								<input type='checkbox' id="adventure_dm" name="adventure_dm" required>
// 								<label for="adventure_dm">Yes</label>
// 							</div>
// 						</form>
// 					</div>
// 					<div class="modal-footer">
// 						<div class="row">
// 						<div class="col-md-12">
// 					    <button class="btn btn-danger" ng-click="vm.cancel()">Cancel</button>
// 					    <a class="btn btn-success" ng-click="vm.ok()" ui-sref="home.create_char">Create</a>
// 						</div>
// 						</div>
// 					</div>
// 			  </script>
// 			  <a style="text-decoration: none;" href="" ng-click="vm.open()">
// 					<div class="well well-sm">
// 						<h2>Create New Adventure</h2>
// 					</div>
// 				</a>
// 			</div>
// 		`


// 	  var directive = {
// 	  	restrict: "EA",
// 	  	template: templateString,
// 	  	controller: "NewAdventureModalController",
// 	  	controllerAs: "vm",
// 	  };

// 	  return directive;
// 	}
// })();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('RemoveAdventureModalInstanceController', controller);

  controller.$inject = [
    "$uibModalInstance"
  ];

  function controller($uibModalInstance) {
    /* jshint validthis: true */
    var vm = this;
    vm.ok = ok;
    vm.cancel = cancel;
    //////////

    function ok() {
      $uibModalInstance.close();
    };
    function cancel() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('RemoveAdventureModalController', controller);

  controller.$inject = [
    "$uibModal"
  ];

  function controller($uibModal) {
    /* jshint validthis: true */
    var vm = this;
    vm.open = open;
    //////////

    function open() {
      var modalInstance = $uibModal.open({
        templateUrl: 'remove-adventure-modal.html',
        controller: 'RemoveAdventureModalInstanceController',
        controllerAs: 'vm',
      });
    };
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('AdventureViewController', controller);

  controller.$inject = [];

  function controller() {
    /* jshint validthis: true */
    var vm = this;

    vm.dm = true;
    vm.tabs = [
      {
        heading:'DM',
        active: true,
        route: "home.adventure-view.dm.adventure"
      },
      {
        heading:'P1',
        route: "home.adventure-view.player.character-stats"
      }
    ];
    //////////
  }
})();
// 'use strict';

// angular.module('app')
// 	.controller('AdventureViewController', 
// 		[
// 							 "$state", "$scope",
// 			function ($state,		$scope) {
// 				$scope.dm = true;
// 				$scope.tabs = [
// 			    {
// 			    	heading:'DM',
// 			    	active: true,
// 			    	route: "home.adventure-view.dm.adventure"
// 			    },
// 			    {
// 			    	heading:'P1',
// 			    	route: "home.adventure-view.player.character-stats"
// 			    }
// 			  ];
// 			}
// 		]
// 	);
// 'use strict';

// angular.module('app')
// 	.controller('DMPageController', 
// 		[
// 							 "$state", "$scope",
// 			function ($state,		$scope) {
// 				$scope.pageChange = function() {
// 					if ($scope.page_select) {
// 						$state.go("home.adventure-view.dm." + $scope.page_select);
// 					};
// 				}
// 			}
// 		]
// 	);
// 'use strict';

// angular.module('app')
// 	.controller('PlayerPageController', 
// 		[
// 							 "$state", "$scope",
// 			function ($state,		$scope) {
// 				$scope.pageChange = function() {
// 					if ($scope.page_select) {
// 						$state.go("home.adventure-view.player." + $scope.page_select);
// 					};
// 				}
// 			}
// 		]
// 	);
(function () {
  'use strict';

  angular
    .module('app')
    .controller('DMPageController', controller);

  controller.$inject = [
    "$state"
  ];

  function controller($state) {
    /* jshint validthis: true */
    var vm = this;

    vm.pageChange = pageChange;
    //////////

    function pageChange() {
      if (vm.page_select) {
        $state.go("home.adventure-view.dm." + vm.page_select);
      };
    }
  }
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('CharStatsAccordionController', controller);

  controller.$inject = [];

  function controller() {
    /* jshint validthis: true */
    var vm = this;

    vm.groups = [
      {
        title: 'Strength',
        ability_score: 18,
        ability_modifier: 4,
        saving_throws: true,
        skills: [
          {
            name: "Acrobatics",
            value: true
          }
        ]
      },
      {
        title: 'Dexterity',
        ability_score: 18,
        ability_modifier: 4,
        saving_throws: true,
        skills: [
          {
            name: "Athletics",
            value: true
          },
          {
            name: "Sleight Of Hand",
            value: true
          },
          {
            name: "Stealth",
            value: true
          }
        ]
      },
      {
        title: 'Constitution',
        ability_score: 18,
        ability_modifier: 4,
        saving_throws: true,
        skills: []
      },
      {
        title: 'Intelligence',
        ability_score: 18,
        ability_modifier: 4,
        saving_throws: true,
        skills: [
          {
            name: "Arcana",
            value: true
          },
          {
            name: "History",
            value: true
          },
          {
            name: "Investigation",
            value: true
          },
          {
            name: "Nature",
            value: true
          },
          {
            name: "Religion",
            value: true
          }
        ]
      },
      {
        title: 'Wisdom',
        ability_score: 18,
        ability_modifier: 4,
        saving_throws: true,
        skills: [
          {
            name: "Animal Handling",
            value: true
          },
          {
            name: "Insight",
            value: true
          },
          {
            name: "Medicine",
            value: true
          },
          {
            name: "Perception",
            value: true
          },
          {
            name: "Survival",
            value: true
          }
        ]
      },
      {
        title: 'Charisma',
        ability_score: 18,
        ability_modifier: 4,
        saving_throws: true,
        skills: [
          {
            name: "Deception",
            value: true
          },
          {
            name: "Intimidation",
            value: true
          },
          {
            name: "Performance",
            value: true
          },
          {
            name: "Persuasion",
            value: true
          }
        ]
      }
    ];
    //////////
  }
})();
// 'use-strict';

// angular.module('app').controller('CharStatsAccordionController', ["$scope", function ($scope) {
//   $scope.groups = [
//     {
//     	title: 'Strength',
//     	ability_score: 18,
//     	ability_modifier: 4,
//     	saving_throws: true,
//     	skills: [
// 	    	{
// 	    		name: "Acrobatics",
// 	    		value: true
// 	    	}
//     	]
//     },
//     {
//     	title: 'Dexterity',
//     	ability_score: 18,
//     	ability_modifier: 4,
//     	saving_throws: true,
//     	skills: [
// 	    	{
// 	    		name: "Athletics",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Sleight Of Hand",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Stealth",
// 	    		value: true
// 	    	}
//     	]
//     },
//     {
//     	title: 'Constitution',
//     	ability_score: 18,
//     	ability_modifier: 4,
//     	saving_throws: true,
//     	skills: []
//     },
//     {
//     	title: 'Intelligence',
//     	ability_score: 18,
//     	ability_modifier: 4,
//     	saving_throws: true,
//     	skills: [
// 	    	{
// 	    		name: "Arcana",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "History",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Investigation",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Nature",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Religion",
// 	    		value: true
// 	    	}
//     	]
//     },
//     {
//     	title: 'Wisdom',
//     	ability_score: 18,
//     	ability_modifier: 4,
//     	saving_throws: true,
//     	skills: [
// 	    	{
// 	    		name: "Animal Handling",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Insight",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Medicine",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Perception",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Survival",
// 	    		value: true
// 	    	}
//     	]
//     },
//     {
//     	title: 'Charisma',
//     	ability_score: 18,
//     	ability_modifier: 4,
//     	saving_throws: true,
//     	skills: [
// 	    	{
// 	    		name: "Deception",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Intimidation",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Performance",
// 	    		value: true
// 	    	},
// 	    	{
// 	    		name: "Persuasion",
// 	    		value: true
// 	    	}
//     	]
//     }
//   ];
// }]);
(function () {
  'use strict';

  angular
    .module('app')
    .controller('PlayerPageController', controller);

  controller.$inject = [
    "$state"
  ];

  function controller($state) {
    /* jshint validthis: true */
    var vm = this;

    vm.pageChange = pageChange;
    //////////

    function pageChange() {
      if (vm.page_select) {
        $state.go("home.adventure-view.player." + vm.page_select);
      };
    }
  }
})();
(function () {
	'use strict';

	angular
		.module('app')
		.factory('adventureFactory', factory);

	factory.$inject = [
		"$http"
	];

	function factory($http) {
	  var factory = {
	  	create: create,
	  	adventures: adventures
	  };

	  return factory;
	  //////////

    function create(adventure) {
      return $http.post('/adventures', adventure)
        .then(createSucceeded)
        .catch(createFailed);

      function createSucceeded(response) {
        return response.data;
      }

      function createFailed(error) {
        alert('XHR Failed for create: ' + error.data);
      }
    }
	}
})();
(function () {
	'use strict';

	angular
		.module('app')
		.factory("authenticator", factory);

	factory.$inject = [
		"$state",
		"store",
		"jwtHelper"
	];

	function factory($state, store, jwtHelper) {
		var service = {
			authenticate: authenticate
		};
		
		return service;
		//////////

		function authenticate(e, to){
	  	var token = store.get("jwt");
	  	if (token) {
		  	var expired = jwtHelper.isTokenExpired(token);
	  	};

	    if (to.data && to.data.requiresLogin) {
	      if (!token || expired) {
	        e.preventDefault();
	        $state.go('root');
	      }
	      if (to.params && to.params.autoActivateChild) {
	        e.preventDefault();
	        $state.go(to.params.autoActivateChild);
	      }
	    }
	    if (to.data && !to.data.requiresLogin) {
	    	if (token && !expired) {
	        e.preventDefault();
	        $state.go('home');
	      }
	    }
		}
	}
})();
(function () {
	'use strict';

	angular
		.module('app')
		.factory('sessionFactory', factory);

	factory.$inject = [
		"$http",
		"store",
		"jwtHelper"
	];

	function factory($http, store, jwtHelper) {
	  var factory = {
	  	login			: login,
	  	register	: register,
	  	getMe			: getMe
	  };

	  return factory;
	  //////////
	  
	  function login(user) {
      return $http.post('/login', user)
        .then(loginSucceeded)
        .catch(loginFailed);

      function loginSucceeded(response) {
      	store.set('jwt', response.data.id_token);
        return response.data;
      }

      function loginFailed(error) {
        alert('XHR Failed for login: ' + error.data);
      }
    }

    function register(new_user) {
      return $http.post('/add/user', new_user)
        .then(registerSucceeded)
        .catch(registerFailed);

      function registerSucceeded(response) {
      	store.set('jwt', response.data.id_token);
        return response.data;
      }

      function registerFailed(error) {
        alert('XHR Failed for register: ' + error.data);
      }
    }

	  function getMe() {
	  	return jwtHelper.decodeToken(store.get("jwt"));
	  }
	}
})();
(function () {
	'use strict';

	angular
		.module('app')
		.controller('LoginController', controller);

	controller.$inject = [
		"$state",
		"store",
		"sessionFactory"
	];

	function controller($state, store, sessionFactory) {
		/* jshint validthis: true */
		var vm = this;

		vm.login = login;
		//////////

    function login() {
      sessionFactory.login(vm.user)
      	.then(function() {
	        $state.go('home');
	      });
    }
	}
})();
(function () {
	'use strict';

	angular
		.module('app')
		.controller('NavbarController', controller);

	controller.$inject = [
		"$state",
		"$rootScope",
		"store"
	];

	function controller($state, $rootScope, store) {
		/* jshint validthis: true */
		var vm = this;
		vm.logout = logout;
		vm.hidden = $state.current.data.hide_navbar;
		//////////

    function logout() {
      store.remove('jwt');
      $state.go('root');
    }

    var verify_navbar = $rootScope.$on("$stateChangeStart", function (e, to) {
      if (to.data.hide_navbar === true){
      	vm.hidden = true;
      };
    })
	}
})();
(function () {
  'use strict';

  angular
    .module('app')
    .controller('RollNewAccordionController', controller);

  controller.$inject = [];

  function controller() {
    /* jshint validthis: true */
    var vm = this;

    vm.groups = [
      {
        title: 'Class',
        content: 'Blurb about classes.'
      },
      {
        title: 'Background',
        content: 'Blurb about backgrounds.'
      },
      {
        title: 'Race',
        content: 'Blurb about races.'
      },
      {
        title: 'Roleplaying',
        content: 'Blurb about roleplaying.'
      },
      {
        title: 'Stats',
        content: 'Blurb about stats.'
      },
      {
        title: 'Equipment',
        content: 'Blurb about equipment.'
      }
    ];
    //////////
  }
})();
(function () {
	'use strict';

	angular
		.module('app')
		.controller('RegisterController', controller);

	controller.$inject = [
		"$state",
		"store",
		"sessionFactory"
	];

	function controller($state, store, sessionFactory) {
		/* jshint validthis: true */
		var vm = this;

		vm.register = register;
		//////////

		function register() {
      sessionFactory.register(vm.new_user)
      	.then(function() {
        	$state.go('home');
      	});
    }
	}
})();