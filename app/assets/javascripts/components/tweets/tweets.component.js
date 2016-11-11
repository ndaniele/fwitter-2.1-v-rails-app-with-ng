(function() {

  'use strict';

  var tweets = {
    transclude: true,
    controller: TweetComponentController,
    templateUrl: 'components/tweets/tweets.html'
  }

  function TweetComponentController() {
    var ctrl = this
    ctrl.tweets = [
        {
            content: "my first tweet",

        },
        {
            content: "my second tweet",

        }
    ]
  }

  angular
    .module('fwitter')
    .component('pane', pane)


}());