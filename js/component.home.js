'use strict';

/* eslint-env angular, browser */

(() => {
  angular.module('demo')
    .component('home', {
      controller: HomeController,
      templateUrl: '/t/home.html'
    });

  function HomeController() {
    const vm = this;

    vm.$onInit = function init() {
      vm.header = 'HOME';
    };
  }

})();
