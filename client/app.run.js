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