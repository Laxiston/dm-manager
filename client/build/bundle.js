'use strict';

angular.module('app').controller('DMRemoveAdventureModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'dm_remove_adventure_modal.html',
      controller: 'DMRemoveAdventureModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('DMRemoveAdventureModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
'use strict';

angular.module('app').controller('InvitePlayerModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'invite_player_modal.html',
      controller: 'InvitePlayerModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('InvitePlayerModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
'use strict';

angular.module('app').controller('NewAdventureModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'new_adventure_modal.html',
      controller: 'NewAdventureModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('NewAdventureModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
'use strict';

angular.module('app').controller('RemoveAdventureModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'remove_adventure_modal.html',
      controller: 'RemoveAdventureModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('RemoveAdventureModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
'use strict';

angular.module('app')
	.controller('AdventureViewCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.dm = true;
				$scope.tabs = [
			    {
			    	heading:'DM',
			    	active: true,
			    	route: "home.adventure_view.dm.adventure"
			    },
			    {
			    	heading:'P1',
			    	route: "home.adventure_view.player.character_stats"
			    }
			  ];
			}
		]
	);
'use strict';

angular.module('app')
	.controller('DMPageCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.pageChange = function() {
					if ($scope.page_select) {
						$state.go("home.adventure_view.dm." + $scope.page_select);
					};
				}
			}
		]
	);
'use strict';

angular.module('app')
	.controller('PlayerPageCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.pageChange = function() {
					if ($scope.page_select) {
						$state.go("home.adventure_view.player." + $scope.page_select);
					};
				}
			}
		]
	);
'use-strict';

angular.module('app').controller('CharStatsAccordionCtrl', ["$scope", function ($scope) {
  $scope.groups = [
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
}]);
(function () {
	'use strict';

	angular.module('app', [
		"ngAnimate",
		"angular-jwt",
	  "angular-storage",
		"ui.bootstrap",
		"ui.router",
		"ui.router.tabs",
		"ui.router.stateHelper"
	]);
})();
(function () {
	'use strict';

	angular
		.module('app')
		.config(routes);

	routes.$inject = [
		"$stateProvider",
		"$urlRouterProvider",
		"jwtInterceptorProvider",
		"stateHelperProvider"
	];

	function routes($stateProvider, $urlRouterProvider, jwtInterceptorProvider,	stateHelperProvider) {
		$urlRouterProvider.otherwise("/");

		stateHelperProvider
			.state({
				name: "root",
				url: "/",
				data: {
					requiresLogin: false
				},
				views: {
					"header" : {
						templateUrl: 'navbar/navbar.html',
						controller: 'NavbarCtrl'
					},
					"content" : {
						templateUrl: 'login/login.html',
						controller: 'LoginController',
						controllerAs: 'vm'
					}
				},
				children: [
					{
						name: "register",
				  	url: "/register",
				  	views: {
							"content@" : {
						    templateUrl: 'register/register.html',
								controller: 'RegisterController',
								controllerAs: 'vm'
							}
						}
				  },
				  {
				  	name: "forgot_info",
				  	url: "/forgot_info",
				  	views: {
							"content@" : {
						    templateUrl: 'forgot_info/forgot_info.html'
							}
						}
				  }
				]
			})
		  .state({
		  	name: "home",
		  	url: "/home",
		  	data: {
		  		requiresLogin: true
		  	},
		  	views: {
					"header@" : {
						templateUrl: 'navbar/navbar_internal.html',
						controller: 'NavbarCtrl'
					},
					"content@" : {
				    templateUrl: 'adventure_select/adventure_select.html'
					}
				},
				children: [
				  {
				  	name: "create_char",
				  	url: "/create_char",
				  	views: {
				  		"content@" : {
				  			templateUrl: 'new_adventure/character_create.html'
				  		}	
				  	}
				  },
				  {
				  	name: "roll_new_char",
				  	url: "/roll_new_char",
				  	views: {
				  		"content@" : {
				  			templateUrl: 'new_adventure/roll_new_char.html'
				  		}	
				  	}
				  },
					{
				  	name: "adventure_view",
				  	url: "/adventure_view",
				  	views: {
							"content@" : {
						    templateUrl: 'adventure_view/adventure_view.html',
						    controller: 'AdventureViewCtrl'
							}
						},
						params: {
				      autoActivateChild: 'home.adventure_view.dm.adventure'
				    },
				    data: {
				    	hide_navbar: true
				    },
				    children: [
				    	{
						  	name: "dm",
						  	url: "/dm",
						  	abstract: true,
						  	data: {
						  		requiresDM: true
						  	},
						  	children:[
						  		{
								  	name: "adventure",
								  	url: "/adventure",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/adventure.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  },
						  		{
								  	name: "bestiary",
								  	url: "/bestiary",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/bestiary.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  },
								  {
								  	name: "monster_info",
								  	url: "/monster_info",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/monster_info.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  },
						  		{
								  	name: "notes",
								  	url: "/notes",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/notes.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  },
								  {
								  	name: "note",
								  	url: "/note",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/note.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  },
								  {
								  	name: "treasury",
								  	url: "/treasury",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/treasury.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  }
						  	]
						  },
						  {
						  	name: "player",
						  	url: "/player",
						  	abstract: true,
						  	data: {
						  		requiresDM: false
						  	},
						  	children:[
									{
								  	name: "character_stats",
								  	url: "/character_stats",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/character_stats.html',
										    controller: "PlayerPageCtrl"
								  		}
								  	}
								  },
									{
						  	  	name: "cooldown_counter",
								  	url: "/cooldown_counter",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/cooldown_counter.html',
										    controller: 'PlayerPageCtrl'
								  		}
								  	}
								  },
								  {
						  	  	name: "spell_book",
								  	url: "/spell_book",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/spell_book.html',
										    controller: 'PlayerPageCtrl'
								  		}
								  	}
								  },
								  {
						  	  	name: "spell_info",
								  	url: "/spell_info",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/spell_info.html',
										    controller: 'PlayerPageCtrl'
								  		}
								  	}
								  },
								  {
						  	  	name: "notes",
								  	url: "/notes",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/notes.html',
										    controller: 'PlayerPageCtrl'
								  		}
								  	}
								  },
								  {
						  	  	name: "note",
								  	url: "/note",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/note.html',
										    controller: 'PlayerPageCtrl'
								  		}
								  	}
								  },
								  {
						  	  	name: "roleplay",
								  	url: "/roleplay",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/roleplay.html',
										    controller: 'PlayerPageCtrl'
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
		"$rootScope",
		"authenticator"
	];

	function runBlock($rootScope, authenticator) {
		$rootScope.$on('$stateChangeStart', function(e, to) {
			authenticator.authenticate(e, to);
	  });
	}
})();
(function () {
	'use strict';

	angular.module('app', [
		"ngAnimate",
		"angular-jwt",
	  "angular-storage",
		"ui.bootstrap",
		"ui.router",
		"ui.router.tabs",
		"ui.router.stateHelper"
	]);
})();
(function () {
	'use strict';

	angular
		.module('app')
		.config(routes);

	routes.$inject = [
		"$stateProvider",
		"$urlRouterProvider",
		"jwtInterceptorProvider",
		"stateHelperProvider"
	];

	function routes($stateProvider, $urlRouterProvider, jwtInterceptorProvider,	stateHelperProvider) {
		$urlRouterProvider.otherwise("/");

		stateHelperProvider
			.state({
				name: "root",
				url: "/",
				data: {
					requiresLogin: false
				},
				views: {
					"header" : {
						templateUrl: 'navbar/navbar.html',
						controller: 'NavbarCtrl'
					},
					"content" : {
						templateUrl: 'login/login.html',
						controller: 'LoginController',
						controllerAs: 'vm'
					}
				},
				children: [
					{
						name: "register",
				  	url: "/register",
				  	views: {
							"content@" : {
						    templateUrl: 'register/register.html',
								controller: 'RegisterController',
								controllerAs: 'vm'
							}
						}
				  },
				  {
				  	name: "forgot_info",
				  	url: "/forgot_info",
				  	views: {
							"content@" : {
						    templateUrl: 'forgot_info/forgot_info.html'
							}
						}
				  }
				]
			})
		  .state({
		  	name: "home",
		  	url: "/home",
		  	data: {
		  		requiresLogin: true
		  	},
		  	views: {
					"header@" : {
						templateUrl: 'navbar/navbar_internal.html',
						controller: 'NavbarCtrl'
					},
					"content@" : {
				    templateUrl: 'adventure_select/adventure_select.html'
					}
				},
				children: [
				  {
				  	name: "create_char",
				  	url: "/create_char",
				  	views: {
				  		"content@" : {
				  			templateUrl: 'new_adventure/character_create.html'
				  		}	
				  	}
				  },
				  {
				  	name: "roll_new_char",
				  	url: "/roll_new_char",
				  	views: {
				  		"content@" : {
				  			templateUrl: 'new_adventure/roll_new_char.html'
				  		}	
				  	}
				  },
					{
				  	name: "adventure_view",
				  	url: "/adventure_view",
				  	views: {
							"content@" : {
						    templateUrl: 'adventure_view/adventure_view.html',
						    controller: 'AdventureViewCtrl'
							}
						},
						params: {
				      autoActivateChild: 'home.adventure_view.dm.adventure'
				    },
				    data: {
				    	hide_navbar: true
				    },
				    children: [
				    	{
						  	name: "dm",
						  	url: "/dm",
						  	abstract: true,
						  	data: {
						  		requiresDM: true
						  	},
						  	children:[
						  		{
								  	name: "adventure",
								  	url: "/adventure",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/adventure.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  },
						  		{
								  	name: "bestiary",
								  	url: "/bestiary",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/bestiary.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  },
								  {
								  	name: "monster_info",
								  	url: "/monster_info",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/monster_info.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  },
						  		{
								  	name: "notes",
								  	url: "/notes",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/notes.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  },
								  {
								  	name: "note",
								  	url: "/note",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/note.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  },
								  {
								  	name: "treasury",
								  	url: "/treasury",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/dm/treasury.html',
										    controller: "DMPageCtrl"
								  		}
								  	}
								  }
						  	]
						  },
						  {
						  	name: "player",
						  	url: "/player",
						  	abstract: true,
						  	data: {
						  		requiresDM: false
						  	},
						  	children:[
									{
								  	name: "character_stats",
								  	url: "/character_stats",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/character_stats.html',
										    controller: "PlayerPageCtrl"
								  		}
								  	}
								  },
									{
						  	  	name: "cooldown_counter",
								  	url: "/cooldown_counter",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/cooldown_counter.html',
										    controller: 'PlayerPageCtrl'
								  		}
								  	}
								  },
								  {
						  	  	name: "spell_book",
								  	url: "/spell_book",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/spell_book.html',
										    controller: 'PlayerPageCtrl'
								  		}
								  	}
								  },
								  {
						  	  	name: "spell_info",
								  	url: "/spell_info",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/spell_info.html',
										    controller: 'PlayerPageCtrl'
								  		}
								  	}
								  },
								  {
						  	  	name: "notes",
								  	url: "/notes",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/notes.html',
										    controller: 'PlayerPageCtrl'
								  		}
								  	}
								  },
								  {
						  	  	name: "note",
								  	url: "/note",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/note.html',
										    controller: 'PlayerPageCtrl'
								  		}
								  	}
								  },
								  {
						  	  	name: "roleplay",
								  	url: "/roleplay",
								  	views: {
								  		"page@home.adventure_view" : {
										    templateUrl: 'adventure_view/pages/player/roleplay.html',
										    controller: 'PlayerPageCtrl'
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
		"$rootScope",
		"authenticator"
	];

	function runBlock($rootScope, authenticator) {
		$rootScope.$on('$stateChangeStart', function(e, to) {
			authenticator.authenticate(e, to);
	  });
	}
})();
'use strict';

angular.module('app').controller('DMRemoveAdventureModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'dm_remove_adventure_modal.html',
      controller: 'DMRemoveAdventureModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('DMRemoveAdventureModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
'use strict';

angular.module('app').controller('InvitePlayerModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'invite_player_modal.html',
      controller: 'InvitePlayerModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('InvitePlayerModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
'use strict';

angular.module('app').controller('NewAdventureModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      templateUrl: 'new_adventure_modal.html',
      controller: 'NewAdventureModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('NewAdventureModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
'use strict';

angular.module('app').controller('RemoveAdventureModalCtrl', ["$scope", "$uibModal", function ($scope, $uibModal) {
  $scope.open = function () {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'remove_adventure_modal.html',
      controller: 'RemoveAdventureModalInstanceCtrl'
    });
  };
}]);

angular.module('app').controller('RemoveAdventureModalInstanceCtrl', ["$scope", "$uibModalInstance", function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
'use strict';

angular.module('app')
	.controller('AdventureViewCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.dm = true;
				$scope.tabs = [
			    {
			    	heading:'DM',
			    	active: true,
			    	route: "home.adventure_view.dm.adventure"
			    },
			    {
			    	heading:'P1',
			    	route: "home.adventure_view.player.character_stats"
			    }
			  ];
			}
		]
	);
'use strict';

angular.module('app')
	.controller('DMPageCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.pageChange = function() {
					if ($scope.page_select) {
						$state.go("home.adventure_view.dm." + $scope.page_select);
					}
				}
			}
		]
	);
'use strict';

angular.module('app')
	.controller('PlayerPageCtrl', 
		[
							 "$state", "$scope",
			function ($state,		$scope) {
				$scope.pageChange = function() {
					if ($scope.page_select) {
						$state.go("home.adventure_view.player." + $scope.page_select);
					};
				}
			}
		]
	);
'use-strict';

angular.module('app').controller('CharStatsAccordionCtrl', ["$scope", function ($scope) {
  $scope.groups = [
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
}]);
(function () {
	'use strict';

	angular
		.module('app')
		.factory("authenticator", authenticatorService);

	authenticatorService.$inject = [
		"$state",
		"store",
		"jwtHelper"
	];

	function authenticatorService($state, store, jwtHelper) {
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
		.factory('sessionFactory', sessionFactory);

	sessionFactory.$inject = [
		"$http",
		"store",
		"jwtHelper"
	];

	function sessionFactory($http, store, jwtHelper) {
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
		.controller('LoginController', LoginController);

	LoginController.$inject = [
		"$state",
		"store",
		"sessionFactory"
	];

	function LoginController($state, store, sessionFactory) {
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
'use strict';

angular.module('app')
	.controller('NavbarCtrl', 
		[
							 "$rootScope", "$scope", "$state", "store", 
			function ($rootScope,   $scope,   $state,   store) {
	      $scope.logout = function() {
	        store.remove('jwt');
	        $state.go('root');
	      }

	      if ($state.current.data.hide_navbar === true) {
	      	$scope.hidden = true;
	      };

	      $rootScope.$on("$stateChangeStart", function (e, to) {
		      if (to.data.hide_navbar === true){
		      	$scope.hidden = true;
		      };
	      })
			}
		]
	);
angular.module('app').controller('RollNewAccordionCtrl', ["$scope", function ($scope) {
  $scope.groups = [
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
}]);
(function () {
	'use strict';

	angular
		.module('app')
		.controller('RegisterController', RegisterController);

	RegisterController.$inject = [
		"$state",
		"store",
		"sessionFactory"
	];

	function RegisterController($state, store, sessionFactory) {
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
(function () {
	'use strict';

	angular
		.module('app')
		.factory("authenticator", authenticatorService);

	authenticatorService.$inject = [
		"$state",
		"store",
		"jwtHelper"
	];

	function authenticatorService($state, store, jwtHelper) {
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
		.factory('sessionFactory', sessionFactory);

	sessionFactory.$inject = [
		"$http",
		"store",
		"jwtHelper"
	];

	function sessionFactory($http, store, jwtHelper) {
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
		.controller('LoginController', LoginController);

	LoginController.$inject = [
		"$state",
		"store",
		"sessionFactory"
	];

	function LoginController($state, store, sessionFactory) {
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
'use strict';

angular.module('app')
	.controller('NavbarCtrl', 
		[
							 "$rootScope", "$scope", "$state", "store", 
			function ($rootScope,   $scope,   $state,   store) {
	      $scope.logout = function() {
	        store.remove('jwt');
	        $state.go('root');
	      }

	      if ($state.current.data.hide_navbar === true) {
	      	$scope.hidden = true;
	      };

	      $rootScope.$on("$stateChangeStart", function (e, to) {
		      if (to.data.hide_navbar === true){
		      	$scope.hidden = true;
		      };
	      })
			}
		]
	);
angular.module('app').controller('RollNewAccordionCtrl', ["$scope", function ($scope) {
  $scope.groups = [
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
}]);
(function () {
	'use strict';

	angular
		.module('app')
		.controller('RegisterController', RegisterController);

	RegisterController.$inject = [
		"$state",
		"store",
		"sessionFactory"
	];

	function RegisterController($state, store, sessionFactory) {
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