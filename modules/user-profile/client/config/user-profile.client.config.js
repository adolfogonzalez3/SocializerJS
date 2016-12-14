(function() {
  'use strict';

  // User profile module config
  angular
    .module('user-profile')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Config logic
    // ...
    Menus.addMenuItem('topbar', { // I manually added this part here (Matt).
	   title: 'Profile',
	   state: 'profile',
	   roles: ['*'] 
    });
  }
})();
