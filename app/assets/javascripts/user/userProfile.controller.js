(function() {
  'use strict';

  function UserProfileController($scope) {
    $scope.name = "Ashley is UserProfiling"
  }

  UserProfileController.$inject = ['$scope']

  angular
    .module('fwitter')
    .controller('UserProfileController', UserProfileController)




}());