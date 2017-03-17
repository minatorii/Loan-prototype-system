(function() {
  'use strict';

  angular
    .module('kitties')
    .controller('TeamController', TeamController);

  TeamController.$inject = ['$scope'];

  function TeamController($scope) {
    var vm = this;

    // Team controller logic
    // ...

    init();

    function init() {
    }
  }
})();
