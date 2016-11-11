(function() {
  'use strict';

  function TweetController($scope) {
    $scope.name = "Ashley"
  }

  angular
    .module('fwitter', ['ui.router', 'templates', 'Devise'])
    .controller('TweetController', TweetController)



}());