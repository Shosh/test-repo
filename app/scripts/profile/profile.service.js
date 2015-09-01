(function() {
  'use strict';
  
  angular
    .module('testingApp.profile')
    .factory('profileService', profileService);

  function profileService($http) {
    return {
      profileData: profileData
    };

    function profileData() {
      var options = { headers: { 'Authorization': 'Token 21693139e405582db8f932c8100b96760a74f5f4'}};
      return $http.get('http://127.0.0.1:8000/base/api/me', options)
        .then(function(response) {
          return response.data;
        }, function(error) {
          return {student: {email: 'asd@asd.com'}};
        });
    }
  }
})();
