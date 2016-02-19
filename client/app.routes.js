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
            controller: 'LoginController as vm'
          }
        },
        children: [
          {
            name: 'register',
            url: '/register',
            views: {
              'content@' : {
                templateUrl: 'register/register.html',
                controller: 'RegisterController as vm'
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
            controller: 'NavbarController as vm'
          },
          'content@' : {
            templateUrl: 'adventure-select/adventure-select.html',
            controller: 'AdventureSelectController as vm'
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
                controller: 'RollNewAccordionController as vm'
              } 
            }
          },
          {
            name: 'adventure-view',
            url: '/adventure-view',
            views: {
              'content@' : {
                templateUrl: 'adventure-view/adventure-view.html',
                controller: 'AdventureViewController as vm'
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