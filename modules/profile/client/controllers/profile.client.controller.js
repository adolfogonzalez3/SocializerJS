(function() {
  'use strict';

  angular
    .module('profile')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$scope'];

  function ProfileController($scope) {
    var vm = this;

    // Profile controller logic
    // ...

    init();

    function init() {
    }
  }
})();
