(function() {
  'use strict';
  
  angular
    .module('testingApp.profile')
    .factory('profileService', profileService);

  function profileService($http, ENV) {
    return {
      profileData: profileData
    };

    function profileData() {
      localStorage.setItem('token', 'c4e9b3fb025352a6d8cb2804dca0f2b9f2c56959');
      return $http.get(ENV.api + 'base/api/me/')
        .then(function(response) {
          return response.data;
        });
    }
  }
})();
