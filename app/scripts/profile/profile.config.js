(function() {
  'use strict';
  
  angular
    .module('testingApp.profile')
    .config(configure);

  function configure($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        controller: 'profileCtrl',
        controllerAs: 'vm',
        templateUrl: 'views/profile/profile.html',
        resolve: {
          user: profileData
        }
      });
    function profileData(profileService) {
      return profileService.profileData()
        .then(function(response) {
          console.log(response);
          return response;
        });
    }
  }
})();
