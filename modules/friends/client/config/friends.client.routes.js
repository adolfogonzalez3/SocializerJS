(function () {
  'use strict';

  //Setting up route
  angular
    .module('friends')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Friends state routing
    $stateProvider
      .state('friends', {
        url: '/friends',
        templateUrl: 'modules/friends/client/views/friends.client.view.html',
        controller: 'FriendsController',
        controllerAs: 'vm'
      });
  }
})();
