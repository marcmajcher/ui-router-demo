'use strict';

/* eslint-env angular, browser */

(() => {
  angular.module('demo', ['ui.router'])
    .config(demoConfig);

  demoConfig.$inject = ['$stateProvider', '$locationProvider'];

  function demoConfig($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home'
      })
      .state({
        name: 'user',
        url: '/user/:id',
        component: 'user'
      })
      .state({
        name: 'posts',
        url: '/posts',
        component: 'posts'
      });
  }

})();
