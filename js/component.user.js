'use strict';

/* eslint-env angular, browser */

(() => {
  angular.module('demo')
    .component('user', {
      controller: UserController,
      templateUrl: '/t/user.html'
    });

  function UserController() {
    const vm = this;

    vm.header = 'USER';
  }

})();
