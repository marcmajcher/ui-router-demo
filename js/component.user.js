'use strict';

/* eslint-env angular, browser */

(() => {
  angular.module('demo')
    .component('user', {
      controller: UserController,
      templateUrl: '/t/user.html'
    });

  UserController.$inject = ['$stateParams'];

  function UserController($stateParams) {
    const vm = this;

    vm.$onInit = function init() {
      vm.header = `USER ${$stateParams.id}`;
    };
  }

})();
