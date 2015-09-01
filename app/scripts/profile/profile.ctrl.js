(function() {
  'use strict';
  
  angular
    .module('testingApp.profile')
    .controller('profileCtrl', profileCtrl);

  function profileCtrl(user) {
    var vm = this;
    vm.user = user;
  }
})();
