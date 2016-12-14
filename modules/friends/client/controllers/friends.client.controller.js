(function() {
  'use strict';

  angular
    .module('friends')
    .controller('FriendsController', FriendsController);

  FriendsController.$inject = ['$scope'];

  function FriendsController($scope) {
    var vm = this;

    // Friends controller logic
    // ...

    init();

    function init() {
    }
  }
})();
