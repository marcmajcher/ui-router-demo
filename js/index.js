'use strict';

/* eslint-env angular, browser */

(() => {
  angular.module('demo', ['ui.router'])
    .config(demoConfig);

  demoConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function demoConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home'
      })
      .state({
        name: 'user',
        url: '/user',
        component: 'user'
      })
      .state({
        name: 'posts',
        url: '/posts',
        component: 'posts'
      });
  }

})();
