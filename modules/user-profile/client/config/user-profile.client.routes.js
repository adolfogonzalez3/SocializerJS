(function () {
  'use strict';

  //Setting up route
  angular
    .module('user-profile')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // User profile state routing
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'modules/user-profile/client/views/profile.client.view.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
      });
  }
})();
