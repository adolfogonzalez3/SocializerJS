(function() {
  'use strict';

  // Friends module config
  angular
    .module('friends')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Config logic
    // ...
  }
})();
