(function() {
  'use strict';

  function HomeController($scope) {
    $scope.name = "Ashley is home"
  }

  HomeController.$inject = ['$scope']

  angular
    .module('fwitter')
    .controller('HomeController', HomeController)




}());