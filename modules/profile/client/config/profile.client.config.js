(function() {
  'use strict';

  // Profile module config
  angular
    .module('profile')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Config logic
    // ...
    Menus.addMenuItem('topbar', {
      title: 'Profile',
      state: 'profile',
      roles: ['*']
    });
  }
})();
