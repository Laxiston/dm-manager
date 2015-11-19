'use strict';

angular.module('dmtool', [
	"ngAnimate",
	"angular-jwt",
  "angular-storage",
	"ui.bootstrap",
	"ui.router",
	"ui.router.tabs",
	"ui.router.stateHelper"
])

.config(
	[
							"$stateProvider", "$urlRouterProvider", "jwtInterceptorProvider", "$httpProvider", "stateHelperProvider",
		function ( $stateProvider,   $urlRouterProvider,   jwtInterceptorProvider, 	 $httpProvider, 	stateHelperProvider) {
			$urlRouterProvider.otherwise("/");

			$stateProvider
				//external - should redirect to adventure select if logged in
				.state("root", {
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
							templateUrl: 'login_and_reg/login.html',
							controller: 'LoginCtrl'
						}
					}
				})
				.state("register", {
			  	url: "/register",
			  	views: {
						"content@" : {
					    templateUrl: 'login_and_reg/register.html',
							controller: 'RegisterCtrl'
						}
					}
			  })
			  .state("forgot_info", {
			  	url: "/forgot_info",
			  	views: {
						"content@" : {
					    templateUrl: 'login_and_reg/forgot_info.html'
						}
					}
			  })
				// children: [
				//   {
				//   	name: "home",
				//   	url: "/home",
				//   	data: {
				//   		requiresLogin: true
				//   	},
				//   	views: {
				// 			"header@" : {
				// 				templateUrl: 'navbar/navbar_internal.html',
				// 				controller: 'NavbarCtrl'
				// 			},
				// 			"content@" : {
				// 		    templateUrl: 'adventure_select/adventure_select.html'
				// 			}
				// 		},
				//   	children: [
				// 		  {
				//   			name: "adventure_view",
				// 		  	url: "/adventure_view",
				// 		  	views: {
				// 		  		"content@" : {
				// 				    templateUrl: 'adventure_view/adventure_view.html',
				// 				    controller: 'AdventureViewCtrl'
				// 		  		}
				// 		  	},
				// 		  	children: [
				// 		    // 	{
				// 			  	// 	name: "dm",
				// 				  // 	url: "/dm",
				// 				  // 	views: {
				// 				  // 		"adv_body@" : {
				// 						//     templateUrl: 'adventure_view/pages/adventure.html',
				// 						//     controller: 'AdventureViewTabsCtrl'
				// 				  // 		}
				// 				  // 	}
				// 				  // },
				// 				  {
				// 				  	name: "player",
				// 				  	url: "/player",
				// 				  	views: {
				// 				  		"content@" : {
				// 						    templateUrl: 'adventure_view/pages/adventure.html',
				// 						    controller: function ($state, $scope, $window) {
				// 									console.log("hi");
				// 								}
				// 				  		}
				// 				  	}
				// 				  }
				// 		  	]
				// 		  },
				// 		  {
				//   			name: "create_char",
				// 		  	url: "/create_char",
				// 		  	views: {
				// 		  		"content@" : {
				// 		  			templateUrl: 'new_adventure/character_create.html'
				// 		  		}	
				// 		  	}
				// 		  },
				// 		  {
				//   			name: "roll_new_char",
				// 		  	url: "/roll_new_char",
				// 		  	views: {
				// 		  		"content@" : {
				// 				    templateUrl: 'new_adventure/roll_new_char.html'
				// 		  		}	
				// 		  	}
				// 		  }
				//   	]
				//   }
				// ]
			 //  //internal - should redirect to root if not logged in
			 //  .state({
			 //  	name: "home",
			 //  	url: "/home",
			 //  	data: {
			 //  		requiresLogin: true
			 //  	},
			 //  	views: {
				// 		"header@" : {
				// 			templateUrl: 'navbar/navbar_internal.html',
				// 			controller: 'NavbarCtrl'
				// 		},
				// 		"content@" : {
				// 	    templateUrl: 'adventure_select/adventure_select.html'
				// 		}
				// 	},
			 //  	children: [
				// 	  {
			 //  			name: "adventure_view",
				// 	  	url: "/adventure_view",
				// 	  	views: {
				// 	  		"content@" : {
				// 			    templateUrl: 'adventure_view/adventure_view.html',
				// 			    controller: 'AdventureViewCtrl'
				// 	  		}
				// 	  	},
				// 	  	children: [
				// 	    // 	{
				// 		  	// 	name: "dm",
				// 			  // 	url: "/dm",
				// 			  // 	views: {
				// 			  // 		"adv_body@" : {
				// 					//     templateUrl: 'adventure_view/pages/adventure.html',
				// 					//     controller: 'AdventureViewTabsCtrl'
				// 			  // 		}
				// 			  // 	}
				// 			  // },
				// 			  {
				// 			  	name: "player",
				// 			  	url: "/player",
				// 			  	views: {
				// 			  		"adv@root.adventure_view" : {
				// 					    templateUrl: 'adventure_view/pages/adventure.html',
				// 					    controller: function ($state, $scope, $window) {
				// 								console.log("hi");
				// 							}
				// 			  		}
				// 			  	}
				// 			  }
				// 	  	]
				// 	  },
				// 	  {
			 //  			name: "create_char",
				// 	  	url: "/create_char",
				// 	  	views: {
				// 	  		"content@" : {
				// 	  			templateUrl: 'new_adventure/character_create.html'
				// 	  		}	
				// 	  	}
				// 	  },
				// 	  {
			 //  			name: "roll_new_char",
				// 	  	url: "/roll_new_char",
				// 	  	views: {
				// 	  		"content@" : {
				// 			    templateUrl: 'new_adventure/roll_new_char.html'
				// 	  		}	
				// 	  	}
				// 	  }
			 //  	]
			 //  })

			  ;
		}
	]
)
.run(
	[
						 "$rootScope", "$state", "$stateParams", "store", "jwtHelper", 
		function ($rootScope,   $state, 	$stateParams,		store, 	 jwtHelper) {
			//useful to have while app is running
			$rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;

		  $rootScope.$on('$stateChangeStart', function(e, to) {
		    if (to.data && to.data.requiresLogin) {
		      if (!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))) {
		        e.preventDefault();
		        $state.go('root');
		      }
		    }
		    if (to.data && !to.data.requiresLogin) {
		    	if (store.get('jwt') && !jwtHelper.isTokenExpired(store.get('jwt'))) {
		        e.preventDefault();
		        $state.go('home');
		      }
		    }
		  });
		}
  ]
)

;