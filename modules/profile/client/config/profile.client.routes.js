(function () {
  'use strict';

  //Setting up route
  angular
    .module('profile')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Profile state routing
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'modules/profile/client/views/profile.client.view.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
      });
  }
})();
