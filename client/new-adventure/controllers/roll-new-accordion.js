(function () {
  'use strict';

  angular
    .module('app')
    .controller('RollNewAccordionController', RollNewAccordionController);

  RollNewAccordionController.$inject = [];

  function RollNewAccordionController() {
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