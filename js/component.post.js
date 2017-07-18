'use strict';

/* eslint-env angular, browser */

(() => {
  angular.module('demo')
    .component('posts', {
      controller: PostController,
      templateUrl: '/t/post.html'
    });

  function PostController() {
    const vm = this;

    vm.header = 'POST';
  }

})();
