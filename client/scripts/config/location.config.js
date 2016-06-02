"use strict";

angular.module("meanPanda")
    .config(['$locationProvider', '$urlRouterProvider',
        function ($locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/feed');
        }]);
