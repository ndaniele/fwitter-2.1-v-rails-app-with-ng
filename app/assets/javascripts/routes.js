(function() {

    'use strict';

    angular
        .module('fwitter')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })
                .state('home.userProfile', {
                    url: 'userProfile',
                    templateUrl: 'user/user-profile.html',
                    controller: 'UserProfileController as vm'
                })

            $urlRouterProvider.otherwise('/')
        })



}());