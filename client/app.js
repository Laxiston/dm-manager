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

			stateHelperProvider
				//external - should redirect to adventure select if logged in
				.state({
					//root
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
							templateUrl: 'login_and_reg/login.html',
							controller: 'LoginCtrl'
						}
					},
					children: [
						{
							//root.register
							name: "register",
					  	url: "/register",
					  	views: {
								"content@" : {
							    templateUrl: 'login_and_reg/register.html',
									controller: 'RegisterCtrl'
								}
							}
					  },
					  {
					  	//root.forgot_info
					  	name: "forgot_info",
					  	url: "/forgot_info",
					  	views: {
								"content@" : {
							    templateUrl: 'login_and_reg/forgot_info.html'
								}
							}
					  }
					]
				})
			  .state({
			  	//home
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
						//home.adventure_view
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
					      autoActivateChild: 'home.adventure_view.player'
					    },
					    data: {
					    	hide_navbar: true
					    },
					    children: [
								//home.adventure_view.player
					    	{
							  	name: "player",
							  	url: "/player",
							  	views: {
							  		"left@home.adventure_view" : {
									    templateUrl: 'adventure_view/pages/adventure.html',
									    controller: 'AdventureViewCtrl'
							  		},
							  		"right@home.adventure_view" : {
									    templateUrl: 'adventure_view/pages/bestiary.html',
									    controller: 'AdventureViewCtrl'
							  		}
							  	},
							  	children: [
										//home.adventure_view.player.test
							  		{
									  	name: "test",
									  	views: {
									  		"left@home.adventure_view" : {
											    templateUrl: 'adventure_view/pages/bestiary.html',
											    controller: 'AdventureViewCtrl'
									  		}
									  	}
									  }
							  	]
							  }
					    ]
					  },
				  	//home.create_char
					  {
					  	name: "create_char",
					  	url: "/create_char",
					  	views: {
					  		"content@" : {
					  			templateUrl: 'new_adventure/character_create.html'
					  		}	
					  	}
					  },
				  	//home.roll_new_char
					  {
					  	name: "roll_new_char",
					  	url: "/roll_new_char",
					  	views: {
					  		"content@" : {
					  			templateUrl: 'new_adventure/roll_new_char.html'
					  		}	
					  	}
					  }
					]
			  })
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

			    	console.log("one");

		        e.preventDefault();
		        $state.go('root');
		      }

		      if (to.params && to.params.autoActivateChild) {

			    	console.log("three");

		        e.preventDefault();
		        $state.go(to.params.autoActivateChild);
		      }
		    }
		    if (to.data && !to.data.requiresLogin) {
		    	if (store.get('jwt') && !jwtHelper.isTokenExpired(store.get('jwt'))) {
			    	
			    	console.log("two");

		        e.preventDefault();
		        $state.go('home');
		      }
		    }
		  });
		}
  ]
)

;